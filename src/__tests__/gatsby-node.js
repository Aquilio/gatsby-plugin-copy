const fs = require('fs');
const fse = require('fs-extra');
const { onPostBuild } = require(`../gatsby-node`);

const cleanup = () =>  fse.emptyDir(`${__dirname}/fixtures/public`);

describe(`gatsby-plugin-copy`, () => {

  beforeAll(cleanup);
  afterEach(cleanup);


  it(`Copies a single file`, () => {
    const filesToCopy = {};
    filesToCopy[`${__dirname}/fixtures/file1.txt`] = `${__dirname}/fixtures/public/file.txt`;
    return onPostBuild([], filesToCopy).then(() => {
      expect(fs.existsSync(`${__dirname}/fixtures/public/file.txt)`)).toBe(true);
    }).catch((err) => {});
  });

  it(`Copies multiple file`, () => {
    const filesToCopy = {};
    filesToCopy[`${__dirname}/fixtures/file1.txt`] = `${__dirname}/fixtures/public/file.txt`;
    filesToCopy[`${__dirname}/fixtures/file1.txt`] = `${__dirname}/fixtures/public/file2.txt`;
    return onPostBuild([], filesToCopy).then(() => {
      expect(fs.existsSync(`${__dirname}/fixtures/public/file.txt)`)).toBe(true);
      expect(fs.existsSync(`${__dirname}/fixtures/public/file2.txt)`)).toBe(true);
    }).catch((err) => {});
  });

});
