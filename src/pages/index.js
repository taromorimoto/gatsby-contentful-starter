import * as React from 'react'
import Layout from '../components/Layout'
import Page from '../components/Page'

const IndexPage = props => {
  return (
    <Page title="Gatsby Contentful Starter" {...props}>
      <Layout>
        <h1>
          Gatsby Contentful Starter
        </h1>
        <p>
          Easy setup with Styled Components, Contentful and Genero Design System.
        </p>
        <h2>Includes</h2>
        <ul>
          <li>
            Use components from Genero Design System.
          </li>
          <li>
            Style with Styled Components.
          </li>
          <li>
            Fetch data from Contentful.
          </li>
        </ul>
        <h2>Things to do</h2>
        <ul>
          <li>
            Deploy incrementally with Netlify.
          </li>
          <li>
            Fix sitemap.
          </li>
          <li>
            Setup i21n with localized Contentful content.
          </li>
          <li>
            Style atomic elements with GDS sass.
          </li>
        </ul>
      </Layout>
    </Page>
  )
}

export default IndexPage

