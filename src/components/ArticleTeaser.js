import React from 'react'
import styled from 'styled-components'

import Link from './Link'


const ArticleTeaser = ({ article }) => (
  <div>
    <Link to={`/article/${article.slug}`}>
      <gds-media-card
        image-url={article.heroImage.fluid.src}
        srcset={article.heroImage.fluid.srcSet}
        sizes={article.heroImage.fluid.sizes}
      >
        <PreviewTitle slot="headline">
          {article.title}
        </PreviewTitle>
        <div
          slot="description"
          dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }} />
      </gds-media-card>
    </Link>
  </div>
)

export default ArticleTeaser

const PreviewTitle = styled.div`
  font-size: 1.5em;
`
