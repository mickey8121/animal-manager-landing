const buildImageObj = (
  source = {
    asset: {} as any,
  },
): any => {
  return {
    ...source,
    asset: { ...source.asset, _ref: source.asset._ref || source.asset._id },
  };
};

export default buildImageObj;
