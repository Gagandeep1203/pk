import React from 'react';
import './Blogs.css';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const blogs = [
  { id: 1, title: 'Welcome to Our Blog', summary: 'Get the latest updates and insights from Bandy and Moot.' },
  { id: 2, title: 'How We Help Clients', summary: 'Discover our approach to client success.' },
];

function Blogs() {
  const [titleRef, titleVisible] = useRevealOnScroll();
  const blogRefs = blogs.map(() => useRevealOnScroll());
  return (
    <div id="blogs" className="blogs-container">
      <h2
        className={`blogs-title reveal-on-scroll${titleVisible ? ' visible' : ''}`}
        ref={titleRef}
      >
        Blogs
      </h2>
      <div className="blogs-grid">
        {blogs.map((blog, idx) => {
          const [cardRef, cardVisible] = blogRefs[idx];
          return (
            <div
              className={`blog-card reveal-on-scroll${cardVisible ? ' visible' : ''}`}
              ref={cardRef}
              key={blog.id}
            >
              <h3>{blog.title}</h3>
              <p>{blog.summary}</p>
              <button className="blog-read-btn">Read More</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blogs;