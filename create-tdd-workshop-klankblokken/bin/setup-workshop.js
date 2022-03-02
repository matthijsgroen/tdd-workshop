#!/usr/bin/env node

// I know fp/promises exists that solves this, but requires a high NodeJS version > 16.7.0
// To make this work for more versions, I use this 'older' workaround
const { execSync } = require("child_process");
const {
  mkdir: mkdirCallback,
  copyFile: cpCallback,
  existsSync,
} = require("fs");
const { chdir } = require("process");
const { promisify } = require("util");

const mkdir = promisify(mkdirCallback);
const cp = promisify(cpCallback);

const setupEnvironment = async (folder) => {
  console.log(`Setting up workshop environment in ${folder}`);
  if (!existsSync(folder)) {
    await mkdir(folder);
  }
  for (const fileName of [
    "package.json",
    "gitignore",
    "README.md",
    "tsconfig.json",
    "jest.config.js",
    "klankblokken.ts",
    "klankblokken.spec.ts",
  ]) {
    await cp(
      `${__dirname}/../templates/${fileName}`,
      `./${folder}/${fileName === "gitignore" ? ".gitignore" : fileName}`
    );
  }

  chdir(folder);
  execSync("yarn install");

  console.log("Welcome to the TDD workshop!\n");
  console.log(`for instructions: ${folder}/README.md`);
  console.log("to start:");
  console.log(`cd ${folder}`);
  console.log(`yarn test`);
};

const args = process.argv.slice(2);
const folder = args[0];

if (folder === undefined) {
  console.log(
    "Please run `yarn create tdd-workshop-klankblokken my-folder-name`"
  );
  process.exit(1);
}

setupEnvironment(folder);
