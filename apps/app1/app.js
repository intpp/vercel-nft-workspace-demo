const load = require('intpp-some-nft-demo');

(async () => {
  const object = await load();

  console.log('object', JSON.stringify(object, null, 2));
})();
