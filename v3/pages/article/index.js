import React from "react";
import { withRouter } from "next/router";
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
        margin-block-start: 0;
      }
      .content h2,
      .content h3,
      .content h4,
      .content h5,
      .content h6 {
        margin-block-end: 0.25rem;
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

    const { title, body, published } = data.content;

    const head = (
      <React.Fragment>
        <title>{title}</title>
      </React.Fragment>
    );

    return (
      <Layout head={head}>
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
          </div>
        </div>
        <style jsx>{`
          h1 {
            font-family: "Lora", serif;
          }
          p {
            margin-block-start: 0;
          }
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin-block-end: 0.25rem;
          }
          img {
            max-width: 100%;
          }
          figcaption {
            text-align: center;
            font-size: 80%;
            color: rgba(0, 0, 0, 0.54);
          }
          .container {
            font-family: "Lato", sans-serif;
          }
          .meta {
            font-size: 80%;
            color: rgba(0, 0, 0, 0.54);
            margin-block-end: 0.67rem;
          }
          .meta > .middot {
            padding: 0 0.3em;
          }
          .meta > .middot::after {
            content: "\00B7";
          }
          .container-inner {
            margin: 0 auto;
            max-width: 740px;
            padding: 0 1rem;
          }
          .content {
            line-height: 1.5;
          }
        `}</style>
      </Layout>
    );
  }
}

export default withRouter(Article);
