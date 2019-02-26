import React from "react";

export default () => (
  <React.Fragment>
    <div className="footer-container">
      <div className="container-inner">
        <span>&copy; 2019 Mingyu Liu</span>
      </div>
    </div>
    <style jsx>
      {`
        .footer-container {
          text-align: center;
          font-family: "Lato", sans-serif;
          font-size: 80%;
          padding: 2rem 0;
        }
      `}
    </style>
  </React.Fragment>
);
