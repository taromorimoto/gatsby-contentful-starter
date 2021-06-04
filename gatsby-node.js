const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const Article = path.resolve('./src/templates/Article.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                  node_locale
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach(post => {
          createPage({
            // path: `/${post.node.node_locale}/blog/${post.node.slug}/`,
            path: `/article/${post.node.slug}/`,
            component: Article,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}
