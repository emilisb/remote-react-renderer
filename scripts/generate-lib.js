const fs = require("fs-extra");
const path = require("path");
const globby = require("globby");

const TARGET_BASE_DIR = path.resolve(".", "src", "lib");

const toVarName = (str) =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join("");

const createLibComp = (componentName) => {
  const Comp = toVarName(componentName);
  return `import React from 'react';
import { render } from '@remote-ui/react';
import { onRender } from '../global-api';
import ${Comp} from '../components/${componentName}';

onRender((root, hostProps) => render(<${Comp} hostProps={hostProps}/>, root));
`;
};

const createLibIndexContent = (entiresData /* Array<{ name }> */) => {
  const compEntry = (componentName) =>
    `createPlainWorkerFactory(() => import(/* webpackChunkName: '${componentName}' */ './${componentName}'))`;
  return [
    `import { createPlainWorkerFactory, createWorkerFactory } from '@remote-ui/web-workers';`,
    ...entiresData.map(({ name }) => compEntry(name)),
  ].join("\n");
};

async function setup() {
  await fs.emptyDir(TARGET_BASE_DIR);
}

async function createComponentsEntries() {
  return Promise.all(
    globby.sync("src/components/*.tsx").map(async (compPath) => {
      const { name, base } = path.parse(compPath);
      const target = path.resolve(TARGET_BASE_DIR, base);
      const content = createLibComp(name);
      await fs.writeFile(target, content, { encoding: "utf8" });
      return { name };
    })
  );
}

async function createLibIndex(entires) {
  const indexFileTarget = path.resolve(TARGET_BASE_DIR, "index.ts");
  await fs.writeFile(indexFileTarget, createLibIndexContent(entires), {
    encoding: "utf8",
  });
}

async function main() {
  await setup();
  const entires = await createComponentsEntries();
  await createLibIndex(entires);
  return `succesfully created ${entires.length} components!`;
}

main()
  .then(console.log)
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
