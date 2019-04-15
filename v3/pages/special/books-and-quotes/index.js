import React from "react";
import Link from "next/link";
import Layout from "../../../components/Layout";
import moment from "moment";
import Butter from "buttercms";

const butter = Butter("58db10ebc2dbc8562691a0f274b9e8c1f513f1ef");

const Content = ({ content }) => (
  <React.Fragment>
    <div className="content">{content}</div>
    <style jsx global>{`
      .content p {
        margin-top: 0;
        word-break: break-word;
      }
      .content a {
        color: #00a699;
        text-decoration: none;
      }
      .content a:hover {
        color: #007970;
        text-decoration: underline;
      }
      .content h2,
      .content h3,
      .content h4,
      .content h5,
      .content h6 {
        margin-bottom: 0.25rem;
      }
      .content figure {
        margin-left: 0;
        margin-right: 0;
      }
      .content img {
        max-width: 100%;
      }
      .content figcaption {
        text-align: center;
        font-size: 90%;
        color: rgba(0, 0, 0, 0.54);
      }
      .content {
        line-height: 1.5;
      }
    `}</style>
  </React.Fragment>
);

export default class extends React.Component {
  static getInitialProps = async () => {
    const slug = "books-and-quotes";
    let payload = null;
    try {
      const res = await butter.page.retrieve("*", slug);
      payload = res.data;
    } catch (error) {
      console.error(error);
    }
    return { payload };
  };

  render() {
    const { payload } = this.props;

    if (payload === null) {
      return <div>404 Not Found</div>;
    }

    const content = payload.data.fields.book.map((val, index) => (
      <React.Fragment key={index}>
        <h3>
          <a href={val.title_url} target="_blank" rel="noopener noreferrer">
            {val.title}
          </a>
        </h3>
        <p>
          <small>{val.finish_time}</small>
        </p>
        <div dangerouslySetInnerHTML={{ __html: val.quotes }} />
      </React.Fragment>
    ));

    const head = (
      <React.Fragment>
        <link rel="canonical" href="https://csming.com/books-and-quotes" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://csming.com/books-and-quotes" />
        <meta property="og:title" content="Books and quotes - Mingyu Liu" />
        <meta property="og:site_name" content="Mingyu Liu" />
        <meta property="og:locale" content="en_US" />
      </React.Fragment>
    );

    return (
      <Layout head={head} title="Books and quotes">
        <div className="container">
          <div className="container-inner">
            <h1>Books and quotes</h1>
            <Content content={content} />
          </div>
        </div>
        <style jsx>{`
          h1 {
            font-family: "Lora", serif;
          }
          p {
            margin-top: 0;
          }
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin-bottom: 0.25rem;
          }
          img {
            max-width: 100%;
          }
          figcaption {
            text-align: center;
            font-size: 0.8rem;
            color: rgba(0, 0, 0, 0.54);
          }
          .container {
            font-family: "Lato", sans-serif;
          }
          .meta {
            font-size: 0.8rem;
            color: rgba(0, 0, 0, 0.54);
            margin-bottom: 0.67rem;
          }
          .meta > .middot {
            padding: 0 0.3em;
          }
          .meta > .middot::after {
            content: "\00B7";
          }
          .container-inner {
            margin: 0 auto;
            max-width: 960px;
            padding: 0 1rem;
          }
          .content {
            line-height: 1.5;
          }
          .continue-reading-container {
            text-align: right;
            display: none;
          }
          .continue-reading {
            font-family: "Lora", serif;
            color: dimgrey;
            text-decoration: none;
            border-bottom: 2px solid dimgrey;
            max-width: 50%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .continue-reading:hover {
            color: black;
            border-bottom-color: black;
          }
        `}</style>
      </Layout>
    );
  }
}
