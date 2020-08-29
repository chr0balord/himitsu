import React from 'react'
import Post from '../components/Post';

export default function PostGrid(props) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${props.col || 3}, 1fr)`,
            gap: '30px'
        }}>
            {props.data.map(i => (
                <div>
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
    )
}