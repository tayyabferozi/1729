import React from "react";
import { Link } from "react-router-dom";

const postsData = [
  {
    img: "/assets/imgs/blog-1.jpg",
    title: "Summary",
    desc: "The Network State in one sentence, one paragraph, and one thousand words.",
  },
  {
    img: "/assets/imgs/blog-2.jpeg",
    title: "The Network State",
    desc: "A network state is a social network with an agreed-upon leader, an integrated cryptocurrency, a definite purpose, a sense of national consciousness, and a plan to crowdfund territory.",
  },
  {
    img: "/assets/imgs/blog-3.webp",
    title: "How to Start a New Country",
    desc: "The network state is built cloud first, land last. Rather than starting with the physical territory, we begin with a digital community.",
  },
  {
    img: "/assets/imgs/blog-4.webp",
    title: "The Start Of Startup Cities",
    desc: "Miami demonstrates that the era of startup cities is now underway.",
  },
  {
    img: "/assets/imgs/blog-5.webp",
    title: "Founding vs Inheriting",
    desc: "You can found an institution, or you can inherit it.",
  },
  {
    img: "/assets/imgs/blog-6.webp",
    title: "The Network Union",
    desc: "The network union is the antecedent of the network state: a social network with a blockchain, a leader, and a purpose.",
  },
];

const Explore = () => {
  return (
    <div className="blog-posts">
      {postsData.map((el, idx) => {
        const { img, title, desc } = el;

        return (
          <Link
            to="/blog"
            key={"blog-post-" + idx}
            className="blog-item custom-card with-hover not-sm"
          >
            <img src={img} alt={title} />
            <div className="text">
              <div className="top">
                <img
                  src="/assets/vectors/book-open-cover-solid.svg"
                  alt="book"
                />
                THE NETWORK STATE
              </div>

              <h3 className="title">{title}</h3>
              <p>{desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Explore;
