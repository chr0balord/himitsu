import React from "react"
import { graphql } from "gatsby"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

import "../styles/index.scss"
import Layout from "../components/Layout"
import Sidebar from "../components/Sidebar"
import SEO from "../components/Seo"

export default function Template({ data }) {
  const post = data.markdownRemark
  const { title, author, date, link, path } = post.frontmatter

  // pas production mode, kalau disqusconfig nya sesuain sama production nya yaa~
  const disqusConfig = {
    // url: `himitsu.dev${path}`,
    title: title,
    identifier: path.split("/").slice(-1)[0],
  }

  return (
    <Layout>
      <SEO title={title} />
      <div className="row mt-3">
        <div className="col-md-8">
          <div className="content-bar">
            <h1>{title}</h1>
            <p>
              Posted by {author} on {date} |{" "}
              <CommentCount config={disqusConfig} />
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            {link.length > 0 && (
              <div className="card mx-auto mt-4" style={{ maxWidth: "600px" }}>
                <div className="card-header text-center">
                  Downloadable Content
                </div>
                {link.map(i => {
                  return (
                    <li key={i.label} className="list-group-item text-center">
                      <span className="font-weight-bold mr-2">[{i.label}]</span>
                      <a href={i.url} target="_blank" rel="noreferrer">
                        {i.url}
                      </a>
                    </li>
                  )
                })}
              </div>
            )}
            <div style={{ marginTop: "3rem" }}>
              <Disqus config={disqusConfig} />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <Sidebar />
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        author
        date
        title
        path
        tags
        link {
          label
          url
        }
      }
      html
    }
  }
`
