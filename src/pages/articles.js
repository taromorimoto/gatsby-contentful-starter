import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import ArticleTeaser from '../components/ArticleTeaser'
import Page from '../components/Page'
import styled from 'styled-components'

const Articles = props => {
  const title = get(props, 'data.site.siteMetadata.title')
  const posts = get(props, 'data.allContentfulBlogPost.edges')
  const [author] = get(props, 'data.allContentfulPerson.edges')

  return (
    <Page title={title} {...props}>
      <Hero data={author.node} />
      <Layout>
          <h2 className="section-headline">Recent articles</h2>
          <ArticleList>
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticleTeaser article={node} />
                </li>
              )
            })}
          </ArticleList>
      </Layout>
    </Page>
  )
}

export default Articles

const ArticleList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: var(--gds-spacing-m);
`

export const pageQuery = graphql`
  query ArticlesPageQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(
              maxWidth: 350,
              maxHeight: 196,
              resizingBehavior: SCALE
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
