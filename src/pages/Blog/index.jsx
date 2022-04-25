import React from "react";
import MainLayout from "../../layouts/MainLayout";
import BlogMain from "./BlogMain";
import Head from "./Head";

const Blog = () => {
  return (
    <MainLayout>
      <div id="blog">
        <div className="page-container">
          <div className="blog-container">
            <Head />
            <BlogMain />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
