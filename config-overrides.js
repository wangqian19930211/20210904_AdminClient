const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {   // 配置上babel-plugin-import
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addLessLoader({   // 配置上babel-plugin-import
        javascriptEnabled: true,
        modifyVars: {'@primary-color': '#1DA57A'},
    }),
);