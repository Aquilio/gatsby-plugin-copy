/* eslint-disable no-console */
const fse = require('fs-extra');

const error = (src, dest, err) => {
  console.error(`gatsby-plugin-copy: ${src} -> ${dest} \u2718`);
  console.error();
  console.error(`${err}`);
};
const success = (src, dest) => console.log(`gatsby-plugin-copy: ${src} -> ${dest} \u2714`);

exports.onPostBuild = (args, pluginOptions) => {
  delete pluginOptions.plugins; // eslint-disable-line no-param-reassign
  const { verbose } = pluginOptions;
  delete pluginOptions.verbose; // eslint-disable-line no-param-reassign
  const files = pluginOptions;
  const promises = Object.keys(files).map((src) => {
    const dest = files[src];
    return fse.copy(src, dest).then(() => {
      if (verbose) {
        success(src, dest);
      }
    }).catch((err) => {
      error(src, dest, err);
    });
  });

  return Promise.all(promises);
};
