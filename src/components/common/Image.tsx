import { FC } from 'react';

import { StaticQuery, graphql } from 'gatsby';

import { GatsbyImage } from 'gatsby-plugin-image';

interface Props {
  src: string;
  alt: string;
}

const Image: FC<Props> = ({ src, alt }) => {
  const query = graphql`
    query {
      allImageSharp {
        edges {
          node {
            gatsbyImageData
            fluid(maxWidth: 1200, quality: 95) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `;

  return (
    <StaticQuery
      query={query}
      render={data => {
        const image = data.allImageSharp.edges.find(
          (edge: any) => edge.node.fluid.originalName === src,
        );

        if (!image) {
          throw new Error(`There is no image with such a name "${src}"`);
        }

        return <GatsbyImage image={image.node.gatsbyImageData} alt={alt} />;
      }}
    />
  );
};

export default Image;
