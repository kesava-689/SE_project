// BlogPage.js
import React from 'react';
import './BlogPage.css';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "New: See all your Favorite Partners in one place!",
      description: "Imagine: A page full of your Favorites...",
      author: "kesava",
      link: "/blog/favorite-partners",
    },
    {
      title: "Longer Sessions are Here: 75 Minutes of Focus",
      description: "You asked, we listened! Longer sessions are now available...",
      author: "kesava",
      link: "/blog/longer-sessions",
    },
    // Add more blog posts here...
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-title">Focusmate Blog</h1>
      <div className="blog-container">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <div className="blog-meta">
              <span>By {post.author}</span>
            </div>
            <a href={post.link} className="blog-read-more">Read More »</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
