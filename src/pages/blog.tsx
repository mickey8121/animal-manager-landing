import { FC } from 'react';

import { graphql } from 'gatsby';

import Layout from 'components/layout';

import mapEdgesToNodes from 'helpers/mapEdgesToNodes';
import BlogBlock from 'components/blocks/blog/Blog';
import SEO from 'components/common/Seo';

export const query = graphql`
  query ArchivePageQuery {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const Blog: FC = ({ data }: any) => {
  const postNodes = data && data.posts && mapEdgesToNodes(data.posts);

  return (
    <Layout isColorTheme>
      <SEO title='Blog' />
      <div className='blog-page background--grey'>
        {postNodes && postNodes.length > 0 && <BlogBlock articles={postNodes} />}
      </div>
    </Layout>
  );
};

export default Blog;
