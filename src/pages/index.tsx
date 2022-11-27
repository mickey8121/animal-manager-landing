import { FC } from 'react';

import Layout from 'components/layout';
import Content from 'components/layout/Content';

import 'styles/index.scss';

import { graphql } from 'gatsby';

export const query = graphql`
  fragment SanityImage on SanityMainImage {
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

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      subtitle
      description
      keywords
      mainImage {
        ...SanityImage
        alt
      }
      features {
        title
        content {
          ... on SanityVideo {
            _type
            url
          }
          ... on SanityMainImage {
            _type
            ...SanityImage
            alt
          }
        }
      }
    }
    posts: allSanityPost(
      limit: 4
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

const IndexPage: FC = ({ data: { posts } }: any) => (
  <Layout>
    <Content posts={posts} />
  </Layout>
);

export default IndexPage;
