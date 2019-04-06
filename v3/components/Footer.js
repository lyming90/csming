import React from "react";

export default () => (
  <React.Fragment>
    <div className="footer-container">
      <div className="container-inner">
        <span>&copy; Mingyu Liu. Powered by </span>{" "}
        <img
          className="butter"
          src="https://cdn.buttercms.com/PGJPyIwaQ2KnOA8UyKfH"
        />
      </div>
    </div>
    <style jsx>
      {`
        .butter {
          height: 1.5rem;
          margin-left: 0.25rem;
        }
        .container-inner {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .footer-container {
          font-family: "Lato", sans-serif;
          font-size: 1rem;
          padding: 2rem 0;
        }
      `}
    </style>
  </React.Fragment>
);
