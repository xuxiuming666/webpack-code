const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

// presets: [['@babel/preset-env', {
// 	targets: {
//      chrome: "67",
//    },
// 	useBuiltIns: 'usage'
// }]]


module.exports = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	entry: {
		main: './src/index.js'
	},
	devServer: {
		contentBase: './dist',
		open: true,
		port: 8080,
		hot: true,
		hotOnly: true
	},
	module: {
		rules: [{ 
			test: /\.js$/, 
			exclude: /node_modules/, // 排除node_modules
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'] // 包含了所有es6转es5的规则
			}
		}, {
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			} 
		}, {
			test: /\.(eot|ttf|svg)$/,
			use: {
				loader: 'file-loader'
			} 
		}, {
			test: /\.scss$/,
			use: [
				'style-loader', 
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2
					}
				},
				'sass-loader',
				'postcss-loader'
			]
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader'
			]
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html' // 自动生成html文件
		}), 
		new CleanWebpackPlugin(['dist']), //每次打包自动清空dist目录
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: '[name].js', // name由entry的key值决定，此处为main
		path: path.resolve(__dirname, 'dist')
	}
}