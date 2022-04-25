import React from "react";

const Head = () => {
  return (
    <div>
      <div className="d-flex gap-2 align-item-center mb-3">
        <img
          width={15}
          src="/assets/vectors/book-open-cover-solid.svg"
          alt="book"
        />
        <div className="fw-bold text-light-1">THE NETWORK STATE</div>
      </div>
      <h1 className="">Summary</h1>
      <h2 className="mt-3">
        The Network State in one sentence, one paragraph, and one thousand
        words.
      </h2>
      <hr />
    </div>
  );
};

export default Head;
