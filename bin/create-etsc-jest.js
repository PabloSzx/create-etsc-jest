#!/usr/bin/env node

/**
 * @type import("recursive-copy")["default"]
 */
// @ts-ignore
const copy = require("recursive-copy");
const { existsSync } = require("fs");
const { resolve, join } = require("path");
const { program } = require("commander");

program
  .version("0.0.1")
  .description("Create base package using TypeScript + esbuild + Jest")
  .option("-t, --template <name>", 'Template to use, available: "base"', "base")
  .option("--overwrite", "If it should overwrite files", false)
  .arguments("<path>")
  .parse(process.argv);

/**
 * @type String
 */
const pathTarget = resolve(program.args.length ? program.args.join(" ") : process.cwd());

/**
 * @type String
 */
const chosenTemplate = program.template;

const templatesDirectory = resolve(__dirname, "../templates");

const chosentemplateDirectory = resolve(templatesDirectory, chosenTemplate);

if (!existsSync(chosentemplateDirectory)) {
  console.error(`Specified template doesn't exists`);
  process.exit(1);
}

const joinedSrc = join(chosentemplateDirectory);

copy(joinedSrc, pathTarget, {
  overwrite: !!program.overwrite,
  results: false,
})
  .then(() => {
    console.log('Package created successfully at "' + pathTarget + '"');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err, err.code);
    if (err.code === "EEXIST") {
      console.error('Add "--overwrite" argument if you want to overwrite the existing files');
    }
    process.exit(1);
  });
