import { Tree, formatFiles, names } from '@nrwl/devkit';
import { wrapAngularDevkitSchematic } from '@nrwl/tao/src/commands/ngcli-adapter';
import { transformFile } from '../utilities/transform';
import { prefixIdentifierTransformer } from '../utilities/prefix-identifier';
import { angularStoriesGenerator } from '@nrwl/angular/src/generators/stories/stories';

interface Schema {
  name: string;
  library: string;
}

export default async function (host: Tree, schema: any) {
  await wrapAngularDevkitSchematic('@schematics/angular', 'component')(host, {
    name: 'components/' + schema.name,
    project: schema.project,
    style: 'scss',
    changeDetection: 'OnPush',
    export: true,
    prefix: 'bio',
  });

  const project = names(schema.project).fileName;
  const fileName = names(schema.name).fileName;
  const className = names(schema.name).className + 'Component';

  // Rename to component class
  transformFile(
    host,
    `libs/${project}/src/lib/${project}.module.ts`, [
    prefixIdentifierTransformer(className),
  ]);

  transformFile(
    host,
    `libs/${project}/src/lib/components/${fileName}/${fileName}.component.ts`, [
    prefixIdentifierTransformer(className),
  ]);

  transformFile(
    host,
    `libs/${project}/src/lib/components/${fileName}/${fileName}.component.spec.ts`, [
    prefixIdentifierTransformer(className),
  ]);

  // Add export to index.ts
  const indexFile = host.read(`libs/${project}/src/index.ts`)?.toString() ?? '';
  host.write(
    `libs/${project}/src/index.ts`,
    indexFile + '\n' + `export * from './lib/components/${fileName}/${fileName}.component';`,
  );

  await formatFiles(host);
}


