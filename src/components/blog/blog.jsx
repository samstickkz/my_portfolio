import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "My First Blog Post",
      content: "This is the content of my first blog post.",
    },
    {
      id: 2,
      title: "Another Blog Post",
      content: "This is another blog post I wrote.",
    },
  ];

  return (
    <div>
      <h2>My Blog</h2>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
