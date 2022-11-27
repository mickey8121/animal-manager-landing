const mapEdgesToNodes = (data: any): any => {
  if (!data.edges) return [];

  return data.edges.map((edge: any): any => edge.node);
};

export default mapEdgesToNodes;
