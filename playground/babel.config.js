const path = require('path');

const moduleResolverConfig = {
  root: path.resolve('./'),
  alias: {
    'react-native-eva-icons': path.resolve(__dirname, '../lib'),
  },
};

module.exports = function (api) {
  api.cache(true);

  const presets = [
    'babel-preset-expo',
  ];

  const plugins = [
    ['module-resolver', moduleResolverConfig],
  ];

  return { presets, plugins };
};
