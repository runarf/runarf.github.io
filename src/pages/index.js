import React from 'react'
import { Link, graphql } from 'gatsby'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'
import { Tabs, Tab } from '@material-ui/core'

class BlogIndex extends React.Component {
  state = {
    value: 1,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { data } = this.props
    console.log(this.props)
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    let codeSamples = data.allSitePage.edges
    codeSamples = codeSamples.filter(({ node }) => {
      if (node.pluginCreator) {
        return node.pluginCreator.name === 'gatsby-plugin-page-creator'
      }
      return false
    })
    const { value } = this.state
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Bio />
        <Tabs value={value} onChange={this.handleChange}>
          <Tab label="Blog" />
          <Tab label="Code" />
        </Tabs>
        {value === 1 &&
          codeSamples.map(({ node }) => {
            return (
              <p>
                <Link to={node.path}>{node.path}</Link>
              </p>
            )
          })}
        {value === 0 &&
          posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile {
      edges {
        node {
          relativePath
        }
      }
    }
    allSitePage {
      edges {
        node {
          path
          pluginCreator {
            name
          }
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
