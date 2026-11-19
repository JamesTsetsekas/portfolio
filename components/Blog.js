import React, { useEffect, useState } from 'react';
import getConfig from 'next/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome } from '@fortawesome/free-brands-svg-icons';

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
    <section id="blog" aria-labelledby="blog-title" className="bg-primary py-5 px-3 px-md-5 rounded-3">
      <div className="container">
        <h1 id="blog-title" className="text-light fw-bold">From the blog</h1>
        <p className="text-light">Notes on Bitcoin, Nostr, AI, and building software.</p>
        {posts.length > 0 ? (
          <>
            <div id="blog-posts" className="d-flex flex-row flex-wrap justify-content-center">
              {posts.slice(0, visible).map(post => (
                <article key={post.url} className="blog-post card card-work py-3 px-3 mx-sm-3 my-3 rounded-3">
                  <h2 className="h4"><a href={post.url} target="_blank" rel="noreferrer">{post.title}</a></h2>
                  <time dateTime={post.date} className="text-primary small mb-2">{post.dateLabel}</time>
                  <p className="text-dark">{post.description}</p>
                  <div className="text-end mt-auto pt-2">
                    <a href={post.url} target="_blank" rel="noreferrer"
                      aria-label={`Read article: ${post.title}`}>
                      <FontAwesomeIcon className="icon-style mx-1" icon={faChrome} size="2x" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <p className="text-light text-center mt-3" role="status">
              Showing {Math.min(visible, posts.length)} of {posts.length} articles
            </p>
          </>
        ) : <p className="text-light">Explore the latest articles on my blog.</p>}
        <div className="d-flex flex-wrap justify-content-center gap-3 align-items-center mt-3">
          {visible < posts.length && (
            <button type="button" className="btn btn-outline-light" aria-controls="blog-posts"
              onClick={() => setVisible(count => count + 6)}>Load more articles</button>
          )}
          <a className="btn btn-outline-light" href="https://blog.jamestsetsekas.com/">Visit the blog</a>
        </div>
      </div>
    </section>
  );
};
