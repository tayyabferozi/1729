import React from "react";

const BlogContent = () => {
  return (
    <div className="blog-container custom-card">
      <h1 className="">The Network State</h1>
      <h2 className="mt-2">A lecture series in virtual reality</h2>
      <hr />

      <div className="main">
        <p>
          Our goal is not merely to describe what a network state looks like but
          to actually build the first one, an open source project we're calling
          1729.
        </p>
        <p>
          If you are interested in mathematics, cryptocurrencies, seasteading,
          transhumanism, space travel, life extension, and
          initially-crazy-seeming-but-technologically-feasible ideas, you should
          enjoy this.
        </p>
        <p>
          If you are interested in mathematics, cryptocurrencies, seasteading,
          transhumanism, space travel, life extension, and
          initially-crazy-seeming-but-technologically-feasible ideas, you should
          enjoy this.
        </p>
        <p>
          Lectures are at 10:00 Pakistan Standard Time ({" "}
          <a href="#0" className="link-underlined">
            apply now
          </a>{" "}
          ).
        </p>
      </div>

      {/* <table>
        <thead>
          <tr>
            <th>Lecture</th>
            <th>DATE</th>
          </tr>
        </thead>
      </table> */}
    </div>
  );
};

export default BlogContent;
