const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const createPaginatedPages = require('gatsby-paginate');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: { order: DESC, fields: [frontmatter___title] }
      ) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              title
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const postsAndPages = result.data.allMarkdownRemark.edges

    // // Post pages:
    // let policies = []
    // // Iterate through each post/page, putting all found posts (where templateKey = article-page) into `posts`
    // postsAndPages.forEach(edge => {
    //   if (_.isMatch(edge.node.frontmatter, {'templateKey': 'policies-page'})) {
    //     policies = policies.concat(edge)
    //   }
    // })

    // createPaginatedPages({
    //   // edges: policies,
    //   createPage: createPage,
    //   pageTemplate: 'src/templates/policies-page.js',
    //   pageLength: 6, // This is optional and defaults to 10 if not used
    //   pathPrefix: '', // This is optional and defaults to an empty string if not used
    //   context: {}, // This is optional and defaults to an empty object if not used
    // })
    // postsAndPages.forEach(edge => {
    //   const id = edge.node.id
    //   createPage({
    //     path: edge.node.fields.slug,
    //     // tags: edge.node.frontmatter.tags,
    //     component: path.resolve(
    //       `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
    //     ),
    //     // additional data can be passed via context
    //     context: {
    //       id,
    //     },
    //   })
    // })

    const post = result.data.allMarkdownRemark.edges;
    // Post pages:

    post.forEach((edge) => {
      const id = edge.node.id;
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
