import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div id="main-layout">
      <Header />
      <div id="main-body">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
