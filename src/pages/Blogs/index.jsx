import React from "react";

import MainLayout from "../../layouts/MainLayout";
import BlogContent from "./BlogContent";
import Explore from "./Explore";
import MailList from "./MailList";

const Blogs = () => {
  return (
    <MainLayout>
      <div id="blogs">
        <div className="blogs-main">
          <BlogContent />

          <Explore />

          <MailList />
        </div>
      </div>
    </MainLayout>
  );
};

export default Blogs;
