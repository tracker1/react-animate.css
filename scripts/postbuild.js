const fs = require("fs");
const pkg = require("../package.json");
const shell = require("shelljs");

async function main() {
  delete pkg.devDependencies;
  delete pkg.scripts;

  fs.writeFileSync(
    `${__dirname}/../dist/package.json`,
    JSON.stringify(pkg, null, 2),
    "utf8"
  );

  fs.copyFileSync(
    `${__dirname}/../node_modules/animate.css/animate.css`,
    `${__dirname}/../dist/animate.css`
  );

  fs.copyFileSync(
    `${__dirname}/../node_modules/animate.css/animate.min.css`,
    `${__dirname}/../dist/animate.min.css`
  );

  shell.mkdir("-p", `${__dirname}/../examples/demo/src/dist/`);
  shell.cp(
    "-r",
    `${__dirname}/../dist/*`,
    `${__dirname}/../examples/demo/src/dist/`
  );
  shell.rm(`${__dirname}/../examples/demo/src/dist/package.json`);
}

main().catch(error => {
  console.error(error);
  process.exit(666);
});
