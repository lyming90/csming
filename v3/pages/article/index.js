import React from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/Layout";
import moment from "moment";
import Butter from "buttercms";

const butter = Butter("58db10ebc2dbc8562691a0f274b9e8c1f513f1ef");

const Content = props => (
  <React.Fragment>
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
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

class Article extends React.Component {
  state = {
    readingTime: null
  };

  static getInitialProps = async ({ query }) => {
    const { slug } = query;
    let data = null;
    try {
      const res = await butter.post.retrieve(slug);
      const payload = res.data;
      data = {
        meta: payload.meta,
        content: payload.data
      };
    } catch (error) {
      console.error(error);
    }
    return { data };
  };

  calculateReadingTime = () => {
    const dom = document.querySelector(".content");
    const textContent = (dom && dom.textContent) || "";
    const wordLength = textContent.split(" ").length;
    return Math.ceil(wordLength / 200);
  };

  componentDidMount() {
    this.setState({
      readingTime: this.calculateReadingTime()
    });
  }

  render() {
    const { data } = this.props;

    if (data === null) {
      return <div>404 Not Found</div>;
    }

    const {
      title,
      body,
      published,
      slug,
      meta_description,
      featured_image
    } = data.content;

    const head = (
      <React.Fragment>
        <link rel="canonical" href={"https://csming.com/blog/".concat(slug)} />
        <meta name="description" content={meta_description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={"https://csming.com/blog/".concat(slug)}
        />
        <meta property="og:title" content={title.concat(" - Mingyu Liu")} />
        <meta
          property="og:image"
          content={
            featured_image || "https://cdn.buttercms.com/2wVfykepT8KEJqGKdvUn"
          }
        />
        <meta property="og:description" content={meta_description} />
        <meta property="og:site_name" content="Mingyu Liu" />
        <meta property="og:locale" content="en_US" />
      </React.Fragment>
    );

    return (
      <Layout head={head} title={title}>
        <div className="container">
          <div className="container-inner">
            <h1>{data.content.title}</h1>
            <div className="meta">
              <span>{moment(published).format("MMM Do, YYYY")}</span>
              {this.state.readingTime && (
                <React.Fragment>
                  <span className="middot" />
                  <span>{this.state.readingTime} min read</span>
                </React.Fragment>
              )}
            </div>
            <Content content={body} />
            <div className="continue-reading-container">
              {data.meta.next_post && (
                <Link
                  as={`/blog/${data.meta.next_post.slug}`}
                  href={`/article?slug=${data.meta.next_post.slug}`}
                >
                  <a className="continue-reading">
                    Next: {data.meta.next_post.title}
                  </a>
                </Link>
              )}
            </div>
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

export default withRouter(Article);
