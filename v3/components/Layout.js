/* eslint-disable react/no-unknown-property */
import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default props => (
  <React.Fragment>
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/static/css/normalize.css" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i|Lora"
        rel="stylesheet"
      />
      {props.head}
    </Head>
    <div>
      {!props.hideNavbar && <Navbar />}
      {props.children}
      {!props.hideFooter && <Footer />}
    </div>
    <style jsx>{`
      div {
        font-size: 18px;
      }
    `}</style>
  </React.Fragment>
);
