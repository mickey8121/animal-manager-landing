import { format } from 'date-fns';

const getBlogUrl = (publishedAt: any, slug: any): any => {
  return `/blog/${format(publishedAt, 'YYYY/MM')}/${slug.current || slug}/`;
};

export default getBlogUrl;
