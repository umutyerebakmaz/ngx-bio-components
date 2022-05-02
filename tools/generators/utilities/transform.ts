import { Tree } from '@nrwl/devkit';
import ts from 'typescript';

export function transformFile(
  host: Tree,
  path: string,
  transformers: ts.Transformer<ts.SourceFile>[],
): void {
  const contents = host.read(path)?.toString();
  if (!contents) {
    throw new Error('File does not exist');
  }
  const sourceFile = ts.createSourceFile(
    path,
    contents,
    ts.ScriptTarget.Latest,
    true,
  );
  const output = ts.transform(sourceFile, transformers);
  const printer = ts.createPrinter();
  host.write(path, printer.printFile(output.transformed[0]));
}

