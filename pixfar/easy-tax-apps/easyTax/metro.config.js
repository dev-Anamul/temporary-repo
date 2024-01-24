const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {getDefaultConfig: test} = require('metro-config');
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// module.exports = (async () => {
//   const {
//     resolver: {sourceExts, assetExts},
//   } = await test();
//   return {
//     transformer: {
//       getTransformOptions: async () => ({
//         transform: {
//           experimentalImportSupport: false,
//           inlineRequires: false,
//         },
//       }),
//     },
//     resolver: {
//       sourceExts,
//       assetExts: [...assetExts, 'hcscript'],
//     },
//   };
// })();
