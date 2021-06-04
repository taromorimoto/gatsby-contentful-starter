import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Page from '../components/Page'
import Layout from '../components/Layout'
import Hero from '../components/Hero'


const Article = props => {
  const post = get(props, 'data.contentfulBlogPost')
  const title = get(props, 'data.contentfulBlogPost.title')

  return (
    <Page title={title} {...props}>
      <Hero data={post} />
      <Layout>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </Layout>
    </Page>
  )
}

export default Article

export const pageQuery = graphql`
  query ArticlePageBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(
          maxWidth: 1180,
          background: "rgb:000000"
        ) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
