/* eslint-disable react/no-unknown-property */
import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default props => (
  <React.Fragment>
    <Head>
      <title>
        {props.title}
        {!props.hideTitleDash ? " - " : ""}Mingyu Liu
      </title>
      <meta charset="utf-8" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="title"
        content={
          props.title + (!props.hideTitleDash ? " - " : "") + "Mingyu Liu"
        }
      />
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
