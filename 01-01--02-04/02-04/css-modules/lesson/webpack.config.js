const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js' // 入口
	},
	module: {
		rules: [{
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			} 
		},{
			test: /\.scss$/,
			use: [
				'style-loader', 
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2, // 必须经过前两个loader
						modules: true // 模块化
					}
				},
				'sass-loader',
				'postcss-loader'
			]
		}]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}