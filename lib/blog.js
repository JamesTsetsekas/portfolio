const Parser = require('rss-parser');

const BLOG_URL = 'https://blog.jamestsetsekas.com';
const FEED_URL = `${BLOG_URL}/rss.xml`;
const parser = new Parser();

async function parsePosts(xml, now = Date.now()) {
  const feed = await parser.parseString(xml);
  const seen = new Set();
  const posts = [];
  for (const item of feed.items || []) {
    let url;
    try {
      url = new URL(item.link);
    } catch {
      continue;
    }
    const timestamp = Date.parse(item.isoDate || item.pubDate);
    if (url.origin !== BLOG_URL || !url.pathname.startsWith('/posts/') ||
        !item.title?.trim() || !Number.isFinite(timestamp) || timestamp > now) continue;
    url.search = '';
    url.hash = '';
    if (seen.has(url.href)) continue;
    seen.add(url.href);
    const date = new Date(timestamp);
    posts.push({
      title: item.title.trim(),
      url: url.href,
      description: (item.contentSnippet || '').replace(/\s+/g, ' ').trim().slice(0, 280),
      date: date.toISOString(),
      dateLabel: date.toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
      }),
    });
  }
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

async function fetchPosts() {
  const response = await fetch(FEED_URL, { signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw new Error('Blog feed unavailable');
  const posts = await parsePosts(await response.text());
  if (!posts.length) throw new Error('Blog feed contains no published articles');
  return posts;
}

module.exports = { fetchPosts, parsePosts };
