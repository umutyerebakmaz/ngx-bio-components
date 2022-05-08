import { libraryGenerator, storybookConfigurationGenerator } from '@nrwl/angular/generators';
import { formatFiles, Tree, installPackagesTask, names } from '@nrwl/devkit';
import { prefixIdentifierTransformer } from '../utilities/prefix-identifier';
import { transformFile } from '../utilities/transform';

interface Schema {
  name: string;
  publishable: boolean;
  importPath: string;
  style: string;
}

export default async function (host: Tree, schema: Schema) {
  await libraryGenerator(host, {
    name: schema.name,
    publishable: true,
    importPath: `@ngx-bio-components/${schema.name}`,
    style: 'scss',
    prefix: 'bio',
    strict: true,
  } as Schema);

  // Get the expected Module name
  const moduleName = names(schema.name).className + 'Module';

  // Prefix the module name
  transformFile(host, `libs/${schema.name}/src/lib/${schema.name}.module.ts`, [
    prefixIdentifierTransformer(moduleName),
  ]);

  // Setup storybook
  await storybookConfigurationGenerator(host, {
    name: schema.name,
    configureCypress: false,
    generateCypressSpecs: false,
  } as any);

  await formatFiles(host);

  return () => {
    installPackagesTask(host);
  };
}


