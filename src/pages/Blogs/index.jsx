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

          <a href="#0" id="see-all">
            See all posts{" "}
            <svg
              className="svg-inline--fa fa-angle-double-right fa-w-12 text-base text-gray-500"
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M363.8 264.5L217 412.5c-4.7 4.7-12.3 4.7-17 0l-19.8-19.8c-4.7-4.7-4.7-12.3 0-17L298.7 256 180.2 136.3c-4.7-4.7-4.7-12.3 0-17L200 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17zm-160-17L57 99.5c-4.7-4.7-12.3-4.7-17 0l-19.8 19.8c-4.7 4.7-4.7 12.3 0 17L138.7 256 20.2 375.7c-4.7 4.7-4.7 12.3 0 17L40 412.5c4.7 4.7 12.3 4.7 17 0l146.8-148c4.7-4.7 4.7-12.3 0-17z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

export default Blogs;
