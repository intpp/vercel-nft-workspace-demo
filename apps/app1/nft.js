const path = require('path');
const { nodeFileTrace } = require('@vercel/nft');

(async () => {
  const files = [path.resolve(__dirname, 'app.js')];

  const { fileList } = await nodeFileTrace(files);

  console.log('fileList', fileList);
})();
