import BasePortableText from '@sanity/block-content-to-react';
import serializers from 'helpers/serializers';
import clientConfig from '../../../client-config';

const PortableText = ({ blocks }: any): any => (
  <BasePortableText blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
);

export default PortableText;
