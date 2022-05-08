import ts from 'typescript';

export function prefixIdentifierTransformer(
  identifier: string
): ts.TransformerFactory<ts.SourceFile> {
  return context => {
    return sourceFile => {
      const visitor: ts.Visitor = node => {

        if (ts.isIdentifier(node) && node.text === identifier) {
          return ts.factory.createIdentifier('Bio' + identifier);
        }

        return ts.visitEachChild(node, visitor, context);
      };
      return ts.visitNode(sourceFile, visitor);
    }
  }
}
