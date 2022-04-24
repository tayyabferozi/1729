import React from "react";

const BlogContent = () => {
  return (
    <div className="blog-container custom-card not-sm">
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

      <table className="custom-card mt-3">
        <thead>
          <tr>
            <th>Lecture</th>
            <th>DATE</th>
          </tr>
        </thead>

        <tbody>
          {[
            {
              icon: "/assets/vectors/t-icon-1.svg",
              text: "Summary",
              date: "Nov 11",
              linkText: "essay",
            },
            {
              icon: "/assets/vectors/t-icon-2.svg",
              text: "The Network State",
              date: "Nov 18",
              linkText: "essay",
            },
            {
              icon: "/assets/vectors/t-icon-3.svg",
              text: "The Ledger of Record",
              date: "Nov 25",
            },
            {
              icon: "/assets/vectors/t-icon-4.svg",
              text: "Optimalism I",
              date: "Nov 25",
            },
            {
              icon: "/assets/vectors/t-icon-5.svg",
              text: "Optimalism II",
              date: "Dec 02",
            },
            {
              icon: "/assets/vectors/t-icon-6.svg",
              text: "Regulation is Information",
              date: "Dec 09",
            },
            {
              icon: "/assets/vectors/t-icon-7.svg",
              text: "Algorithmic Fact Checking",
              date: "Dec 16",
            },
            {
              icon: "/assets/vectors/t-icon-8.svg",
              text: "How We Build The Network State",
              date: "Dec 23",
            },
            {
              icon: "/assets/vectors/t-icon-9.svg",
              text: "Halftime Review",
              date: "Dec 30",
            },
            {
              icon: "/assets/vectors/t-icon-10.svg",
              text: "Decentralized Collaboration",
              date: "Jan 06",
              linkText: "The Network State",
            },
            {
              icon: "/assets/vectors/t-icon-11.svg",
              text: "Transhumanism",
              date: "Jan 13",
            },
            {
              icon: "/assets/vectors/t-icon-12.svg",
              text: "The Pseudonymous Economy",
              date: "Jan 20",
            },
            {
              icon: "/assets/vectors/t-icon-13.svg",
              text: "Why Decentralized Media",
              date: "Jan 27",
            },
            {
              icon: "/assets/vectors/t-icon-14.svg",
              text: "Open Problems in Web3",
              date: "Feb 03",
            },
            {
              icon: "/assets/vectors/t-icon-15.svg",
              text: "CCP, NYT, BTC, Technology",
              date: "Feb 10",
            },
          ].map((el, idx) => {
            const { icon, text, date, linkText } = el;

            return (
              <tr key={"table-row" + idx}>
                <td>
                  <div className="d-flex align-items-center">
                    <img src={icon} alt={text} />
                    <div className="text">
                      {text}{" "}
                      {linkText && (
                        <>
                          (
                          <a className="link-underlined" href="#0">
                            {linkText}
                          </a>
                          )
                        </>
                      )}
                    </div>
                  </div>
                </td>
                <td>{date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BlogContent;
