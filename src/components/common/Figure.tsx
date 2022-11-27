import { GatsbyImage } from 'gatsby-plugin-image';

import { GatsbyImageDataArgs, getGatsbyImageData } from 'gatsby-source-sanity';

import clientConfig from '../../../client-config';

const Figure = ({ node }: any): any => {
  if (!node || !node.asset || !node.asset._id) {
    return null;
  }
  const gatsbyImageData = getGatsbyImageData(
    node,
    { maxWidth: 675 } as GatsbyImageDataArgs,
    clientConfig.sanity,
  );

  if (!gatsbyImageData) {
    throw new Error('There is no image with such a name');
  }

  return (
    <figure>
      <GatsbyImage image={gatsbyImageData} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  );
};

export default Figure;
