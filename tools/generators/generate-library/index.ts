import { formatFiles, Tree, installPackagesTask, names } from '@nrwl/devkit';
import { libraryGenerator, storybookConfigurationGenerator } from '@nrwl/angular/generators';

import { Linter } from '@nrwl/linter';
import { prefixIdentifierTransformer } from '../utilities/prefix-identifier';
import { transformFile } from '../utilities/transform';

export default async function (host: Tree, schema: Schema) {

    await libraryGenerator(host, {
        name: schema.name,
        publishable: true,
        importPath: `@ngx-bio-components/${schema.name}`,
        style: 'scss',
        prefix: 'bio',
        strict: true,
    });

    // get the expected Module name
    const moduleName = names(schema.name).className + 'Module';

    // prefix the module name
    transformFile(host, `libs/${names(schema.name).fileName}/src/lib/${names(schema.name).fileName}.module.ts`, [
        prefixIdentifierTransformer(moduleName),
    ]);

    // Setup storybook
    await storybookConfigurationGenerator(host, {
        name: schema.name,
        configureCypress: false,
        generateCypressSpecs: false,
        linter: Linter.EsLint,
    } as any);

    await formatFiles(host);

    return () => {
        installPackagesTask(host);
    };
}
interface Schema {
    name: string;
    publishable: boolean;
    importPath: string;
    style: string;
}


