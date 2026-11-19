import React, { useEffect, useState } from 'react';
import getConfig from 'next/config';

export const Blog = ({ initialPosts }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [visible, setVisible] = useState(6);

  useEffect(() => {
    const controller = new AbortController();
    const { publicRuntimeConfig } = getConfig();
    fetch(`${publicRuntimeConfig.basePath || ''}/api/blog`, { signal: controller.signal })
      .then(response => response.ok ? response.json() : Promise.reject())
      .then(data => {
        if (Array.isArray(data.posts) && data.posts.length) setPosts(data.posts);
      })
      .catch(() => { /* Keep the posts rendered at build time if refresh fails. */ });
    return () => controller.abort();
  }, []);

  return (
    <section id="blog" aria-labelledby="blog-title" className="bg-white py-5 px-3 px-md-5 border border-secondary rounded-3">
      <div className="container">
        <h1 id="blog-title" className="text-primary fw-bold">From the blog</h1>
        <p className="text-dark">Notes on Bitcoin, Nostr, AI, and building software.</p>
        {posts.length > 0 ? (
          <>
            <div id="blog-posts" className="blog-posts">
              {posts.slice(0, visible).map(post => (
                <article key={post.url} className="blog-post card card-work py-3 px-3 rounded-3">
                  <time dateTime={post.date} className="text-primary small">{post.dateLabel}</time>
                  <h2 className="h4 mt-2"><a href={post.url}>{post.title}</a></h2>
                  <p className="text-dark">{post.description}</p>
                  <a href={post.url} className="btn btn-outline-primary align-self-start mt-auto"
                    aria-label={`Read article: ${post.title}`}>Read article</a>
                </article>
              ))}
            </div>
            <p className="text-primary text-center mt-3" role="status">
              Showing {Math.min(visible, posts.length)} of {posts.length} articles
            </p>
          </>
        ) : <p className="text-dark">Explore the latest articles on my blog.</p>}
        <div className="d-flex flex-wrap justify-content-center gap-3 align-items-center mt-3">
          {visible < posts.length && (
            <button type="button" className="btn btn-dark" aria-controls="blog-posts"
              onClick={() => setVisible(count => count + 6)}>Load more articles</button>
          )}
          <a className="btn btn-outline-dark" href="https://blog.jamestsetsekas.com/">Visit the blog</a>
        </div>
      </div>
    </section>
  );
};
