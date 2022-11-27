import { isFuture } from 'date-fns';

const filterOutDocsPublishedInTheFuture = ({ publishedAt }: any): any => {
  return !isFuture(publishedAt);
};

export default filterOutDocsPublishedInTheFuture;
