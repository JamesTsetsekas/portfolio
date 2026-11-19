import { fetchPosts } from '../../lib/blog';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).end();
  }
  try {
    const posts = await fetchPosts();
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    return res.status(200).json({ posts });
  } catch {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(502).json({ error: 'Blog feed temporarily unavailable' });
  }
}
