const filesToCopy = {
  verbose: true,
}

console.log(filesToCopy);

if(process.env.ENV_FILE === `production`) {
  filesToCopy[`env/production.txt`] = `public/env.txt`
} else {
  filesToCopy[`env/default.txt`] = `public/env.txt`
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-copy`,
      options: filesToCopy,
    },
  ],
}
