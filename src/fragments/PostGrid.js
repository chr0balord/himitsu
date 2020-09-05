import React from "react"
import Post from "../components/Post"

import "../styles/index.scss"

export default function PostGrid(props) {
  return (
    <div style={{ margin: props.sideGap }}>
      <h4>{props.titlePart}</h4>
      <div className={`row row-cols-1 row-cols-md-${props.col}`}>
        {props.data.map(i => (
          <div key={i.frontmatter.path} className="col mb-4">
            <Post
              key={i.frontmatter.path}
              title={i.frontmatter.title}
              author={i.frontmatter.author}
              date={i.frontmatter.date}
              description={i.frontmatter.description}
              path={i.frontmatter.path}
              image={i.frontmatter.image.childImageSharp.fluid.src}
              tags={i.frontmatter.tags}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
