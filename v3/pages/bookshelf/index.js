import React from "react";
import Layout from "../../components/Layout";
import Butter from "buttercms";

const butter = Butter("58db10ebc2dbc8562691a0f274b9e8c1f513f1ef");

export default class extends React.Component {
  static getInitialProps = async () => {
    const slug = "bookshelf";
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

    console.log({ payload });

    const head = (
      <React.Fragment>
        <link rel="canonical" href="https://csming.com/bookshelf" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://csming.com/bookshelf" />
        <meta property="og:title" content="Bookshelf - Mingyu Liu" />
        <meta property="og:site_name" content="Mingyu Liu" />
        <meta property="og:locale" content="en_US" />
      </React.Fragment>
    );

    const books = payload.data.fields.book
      .sort(
        (a, b) =>
          new Date(b.finish_time).getTime() - new Date(a.finish_time).getTime()
      )
      .map((val, index) => {
        console.log(val);
        return (
          <p key={index}>
            <span className="noselect" style={{ marginRight: "1rem" }}>
              -
            </span>
            <a
              className={val.highlight === true ? "highlight" : ""}
              href={val.title_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {val.title}
            </a>
            <style jsx>{`
              .noselect {
                -webkit-touch-callout: none; /* iOS Safari */
                -webkit-user-select: none; /* Safari */
                -khtml-user-select: none; /* Konqueror HTML */
                -moz-user-select: none; /* Old versions of Firefox */
                -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
              }
              p {
                margin-top: 0;
                word-break: break-word;
                font-size: 1rem;
              }
              a {
                color: #00a699;
                text-decoration: none;
              }
              .highlight {
                color: #456cff;
              }
              .highlight:hover {
                color: #001cea;
              }
              a:hover {
                color: #007970;
                text-decoration: underline;
              }
            `}</style>
          </p>
        );
      });

    return (
      <Layout head={head} title="Bookshelf">
        <div className="container">
          <div className="container-inner">
            <h1>Bookshelf</h1>
            <p>
              A somewhat complete list of non-computer science books I've read
              since college. I{" "}
              <span style={{ color: "#456cff", fontStyle: "italic" }}>
                highlighted
              </span>{" "}
              books that I particularly like.
            </p>
            <div className="content">{books}</div>
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
          .container {
            font-family: "Lato", sans-serif;
          }
          .container-inner {
            margin: 0 auto;
            max-width: 1200px;
            padding: 0 1rem;
            line-height: 1.5;
          }
          .noselect {
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
          }
        `}</style>
      </Layout>
    );
  }
}
