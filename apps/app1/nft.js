const path = require('path');
const { nodeFileTrace } = require('@vercel/nft');

const args = process.argv.slice(2);

console.log('args', args);

(async () => {
  const files = [path.resolve(__dirname, 'app.js')];
  const options = {};

  if (args.includes('--with-base')) {
    options.base = __dirname;
  } else if (args.includes('--with-root-base')) {
    options.base = path.resolve(__dirname, '../..');
  }

  if (args.includes('--with-cwd')) {
    options.processCwd = __dirname;
  } else if (args.includes('--with-root-cwd')) {
    options.processCwd = path.resolve(__dirname, '../..');
  }

  const { fileList } = await nodeFileTrace(files, options);

  console.log('fileList', fileList);
})();
