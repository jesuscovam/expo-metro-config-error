const { getDefaultConfig } = require("@expo/metro-config");
const defaultConfig = getDefaultConfig(__dirname);

// blacklist
const exclusionList = require("metro-config/src/defaults/exclusionList");
defaultConfig.resolver.blacklistRE = exclusionList([/#current-cloud-backend\/.*/]);

// transformer
defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
  },
});

module.exports = defaultConfig;

// const exclusionList = require('metro-config/src/defaults/exclusionList')
// module.exports = {
//   resolver: {
//     blacklistRE: exclusionList([/#current-cloud-backend\/.*/]),
//   },
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
// }
