const path = require('path');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.module.rules.push({
    test: /\.(js|ts|tsx)$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    '@babel/runtime': path.resolve(__dirname, './node_modules/@babel/runtime'),
    'react': path.resolve(__dirname, './node_modules/react'),
    'react-native': path.resolve(__dirname, './node_modules/react-native'),
    'react-native-web': path.resolve(__dirname, './node_modules/react-native-web'),
  };

  config.output.publicPath = '';

  return config;
};
