const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	externals: 'lodash',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'library.js',
		library: 'root',
		libraryTarget: 'umd' // window, this
	}
}

// 登陆www.npmjs.com
// npm addUser 添加用户名密码
// npm publish 发布库