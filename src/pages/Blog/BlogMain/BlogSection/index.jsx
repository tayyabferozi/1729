import React from "react";

const BlogSection = ({ title, children }) => {
  return (
    <div className="blog-section mb-5">
      <h2 className="mb-2 sans-serif">{title}</h2>

      {children}
    </div>
  );
};

export default BlogSection;
