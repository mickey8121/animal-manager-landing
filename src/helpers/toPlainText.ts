const toPlainText = (blocks: any): any => {
  if (!blocks) {
    return '';
  }

  return blocks
    .map((block: any) => {
      if (block._type !== 'block' || !block.children) {
        return '';
      }

      return block.children.map((child: any) => child.text).join('');
    })
    .join('\n\n');
};

export default toPlainText;
