import React from "react";
import Butter from "buttercms";
import Link from "next/link";
import moment from "moment";
import Layout from "../../components/Layout";

const butter = Butter("58db10ebc2dbc8562691a0f274b9e8c1f513f1ef");

const head = (
  <React.Fragment>
    <link rel="canonical" href="https://csming.com/blog" />
    {/* TODO: meta description */}
  </React.Fragment>
);

const Card = ({ data }) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="left">
          <div className="title">
            <Link
              prefetch
              as={`/blog/${data.slug}`}
              href={`/article?slug=${data.slug}`}
            >
              <a className="link">{data.title}</a>
            </Link>
          </div>
          <Link
            prefetch
            as={`/blog/${data.slug}`}
            href={`/article?slug=${data.slug}`}
          >
            <p>{data.summary}</p>
          </Link>
          <div className="meta">
            <span>{moment(data.published).format("MMM Do, YYYY")}</span>
          </div>
        </div>
        <div className="right">
          <Link
            prefetch
            as={`/blog/${data.slug}`}
            href={`/article?slug=${data.slug}`}
          >
            <img className="image" src={data.featured_image} />
          </Link>
        </div>
      </div>
      <style jsx>{`
        .container {
          font-family: "Lato", sans-serif;
          padding-bottom: 2rem;
          border-bottom: 1px solid #ccc;
          margin-top: 2rem;
          margin-bottom: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .container:last-of-type {
          border: none;
        }
        .title {
          font-size: 1.2rem;
        }
        .left > p {
          margin-top: 0;
          margin-bottom: 0;
          margin-top: 1rem;
          margin-bottom: 1rem;
          font-size: 1rem;
          line-height: 1.5;
          color: rgba(0, 0, 0, 0.85);
          cursor: pointer;
        }
        .right {
          margin-left: 2rem;
          margin-right: 2rem;
          height: 5rem;
          width: 8.05rem;
          display: flex;
          justify-content: center;
        }
        .image {
          height: 5rem;
          cursor: pointer;
          display: block;
        }
        .meta {
          font-size: 0.8rem;
          color: rgba(0, 0, 0, 0.54);
          margin-top: 1rem;
        }
        .link {
          font-family: "Lora", serif;
          font-weight: bold;
          text-decoration: none;
          color: black;
        }
        @media screen and (max-width: 740px) {
          .right {
            display: none;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

class Blog extends React.Component {
  state = {
    list: null
  };

  static async getInitialProps() {
    let list = null;
    try {
      const res = await butter.post.list({ page: 1, page_size: 10 });
      const payload = res.data;
      list =
        payload &&
        payload.data &&
        payload.data.map(item => ({
          categories: item.categories,
          featured_image: item.featured_image,
          published: item.published,
          summary: item.summary,
          tags: item.tags,
          title: item.title,
          url: item.url,
          slug: item.slug
        }));
    } catch (error) {
      console.error(error);
    }
    return { list };
  }

  render() {
    const { list } = this.props;

    const renderedList = list.map(item => <Card data={item} key={item.slug} />);

    return (
      <Layout title="Blog" head={head}>
        <div className="container">
          <div className="container-inner">
            <div className="card-container">{renderedList}</div>
          </div>
        </div>
        <style jsx>{`
          .container-inner {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }
          .card-container {
            margin-top: 2rem;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Blog;
