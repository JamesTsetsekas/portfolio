const { test } = require('node:test');
const assert = require('node:assert/strict');
const { parsePosts, fetchPosts } = require('../lib/blog.js');

const item = (title, link, date, description = 'A short summary.') =>
  `<item><title>${title}</title><link>${link}</link><pubDate>${date}</pubDate><description>${description}</description></item>`;
const feed = items => `<rss version="2.0"><channel><title>Blog</title>${items}</channel></rss>`;
const older = 'Mon, 02 Nov 2026 12:00:00 GMT';
const newer = 'Thu, 12 Nov 2026 12:00:00 GMT';
const now = Date.parse('2026-11-19T00:00:00Z');

test('sorts newest first, decodes summaries, deduplicates links, and keeps the whole feed', async () => {
  const items = Array.from({ length: 15 }, (_, index) =>
    item(`Article ${index}`, `https://blog.jamestsetsekas.com/posts/${index}/`, older)).join('');
  const posts = await parsePosts(feed(items +
    item('New &amp; current', 'https://blog.jamestsetsekas.com/posts/new/', newer,
      '&lt;b&gt;Bitcoin&lt;/b&gt; &amp; software') +
    item('Duplicate', 'https://blog.jamestsetsekas.com/posts/new/?ref=test#top', newer)), now);
  assert.equal(posts.length, 16);
  assert.equal(posts[0].title, 'New & current');
  assert.equal(posts[0].description, 'Bitcoin & software');
  assert.equal(posts[0].dateLabel, 'Nov 12, 2026');
});

test('excludes unsafe links, missing titles, invalid dates, and future posts', async () => {
  const posts = await parsePosts(feed(
    item('Unsafe', 'javascript:alert(1)', older) +
    item('Other host', 'https://example.com/posts/a/', older) +
    item('Other page', 'https://blog.jamestsetsekas.com/about/', older) +
    item('Bad date', 'https://blog.jamestsetsekas.com/posts/a/', 'unknown') +
    item('Future', 'https://blog.jamestsetsekas.com/posts/b/', 'Thu, 12 Nov 2027 12:00:00 GMT') +
    item(' ', 'https://blog.jamestsetsekas.com/posts/c/', older)), now);
  assert.deepEqual(posts, []);
});

test('rejects malformed XML', async () => {
  await assert.rejects(parsePosts('<rss><channel>'));
});

test('handles upstream errors and empty feeds without treating them as successful refreshes', async t => {
  const originalFetch = global.fetch;
  t.after(() => { global.fetch = originalFetch; });
  global.fetch = async (url, options) => {
    assert.equal(url, 'https://blog.jamestsetsekas.com/rss.xml');
    assert.ok(options.signal instanceof AbortSignal);
    return { ok: false };
  };
  await assert.rejects(fetchPosts(), /unavailable/);
  global.fetch = async () => ({ ok: true, text: async () => feed('') });
  await assert.rejects(fetchPosts(), /no published articles/);
  global.fetch = async () => { throw new Error('Network down'); };
  await assert.rejects(fetchPosts(), /Network down/);
});
