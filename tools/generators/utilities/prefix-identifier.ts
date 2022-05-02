import { BoundElementProperty } from '@angular/compiler';
import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';
import ts from 'typescript';

export function prefixIdentifierTransformer(): ts.TransformerFactory<ts.SourceFile> {
  return context => {
    return sourceFile => {
      const visitor: ts.Visitor = node => {

        if (ts.isIdentifier(node) && node.text === identifier) {
          return ts.factory.createIdentifier('Bio' + identifier);
        }

        return ts.visitEachChild(node, visitor, context);
      };
    }
  }
}
