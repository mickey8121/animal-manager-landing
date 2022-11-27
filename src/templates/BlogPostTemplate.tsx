// eslint-disable-next-line no-use-before-define
import React, { Fragment } from 'react';

import { graphql } from 'gatsby';

import BlogDescription from 'components/blocks/blog/BlogDescription';
import Layout from 'components/layout';
import SEO from 'components/common/Seo';
import toPlainText from 'helpers/toPlainText';

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        ...SanityImage
        alt
      }
      title
      slug {
        current
      }
      _rawExcerpt(resolveReferences: { maxDepth: 5 })
      _rawBody(resolveReferences: { maxDepth: 5 })
      authors {
        _key
        author {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
      }
    }
  }
`;

const BlogPostTemplate = ({ data: { post } }: any): any => {
  return (
    <Layout isColorTheme>
      {post && (
        <Fragment>
          <SEO
            title={post.title || 'Untitled'}
            description={toPlainText(post._rawExcerpt)}
            image={post.mainImage}
          />
          <BlogDescription {...post} />
        </Fragment>
      )}
    </Layout>
  );
};

export default BlogPostTemplate;
