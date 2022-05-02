import { Tree, formatFiles, installPackagesTask, names,  storybookConfiguration } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';
import { transformFile } from '../utilities/transform';
import { prefixIdentifierTransformer } from '../utilities/prefix-identifier';

interface Schema {
  name: string;
  publishable: boolean;
  importPath: string;
}
// Get the expected Module name
const moduleName = names(schema.name).className + 'Module';

export default async function (tree: Tree, schema: Schema) {
  await libraryGenerator(tree, {
    name: schema.name,
    publishable: true,
    importPath: `@ngx-bio-components/${schema.name}`,
    style: 'scss',
    prefix: 'bio',
    strict: true,
  });

  transformFile(host, 'libs/sample/src/lib/sample.module.ts', [prefixIdentifierTransformer('')]);

  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
