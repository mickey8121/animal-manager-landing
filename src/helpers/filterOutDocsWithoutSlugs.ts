const filterOutDocsWithoutSlugs = ({ slug }: any): any => {
  return (slug || {}).current;
};

export default filterOutDocsWithoutSlugs;
