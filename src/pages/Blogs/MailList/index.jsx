import React from "react";

const MailList = () => {
  return (
    <div className="custom-card mail-list with-hover">
      <h1 className="sans-serif">Subscribe to 1729</h1>
      <p className="sm text-light-1 mt-2 mb-4">
        Build the first network state.
      </p>

      <input type="email" placeholder="your@email.com" id="email" />

      <button className="btn btn-gradient lg">
        <div className="btn-text">Subscribe</div>
      </button>
    </div>
  );
};

export default MailList;
