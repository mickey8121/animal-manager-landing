import imageUrlBuilder from '@sanity/image-url';

import clientConfig from '../../client-config';

const builder = imageUrlBuilder(clientConfig.sanity);

const imageUrlFor = (source: any): any => {
  return builder.image(source);
};

export default imageUrlFor;
