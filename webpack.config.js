const path = require('path'),
	webpack = require('webpack'),
	NODE_ENV = process.env.NODE_ENV || "DEV",
	NODE_RUN = process.env.NODE_RUN || "0",
	ROOT_PATH = path.resolve(__dirname) + "/",
	OUT_PATH = path.resolve(ROOT_PATH, 'build') + "/",
	SERVER_PATH = process.env.SERVER || "./build/",
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: {
		page: "./src/js/entrance.js",
		commons: ['vue', 'vue-router']
	},
	output: {
		path: NODE_RUN === "0" ? path.resolve(__dirname, './build') : "/",
		publicPath: NODE_RUN === "0" ? "./build/": "/build/",
		filename: NODE_RUN === "0" ? "build.[hash].js" : "build.js",
	},
	externals:[require('webpack-require-http')],
	module: {
		rules: [{
			test: /\.html$/,
			use: [{
				loader: 'html-loader',
				options: {
					attrs: ['img:src', 'link:href']
				}
			}]
		}, {
			test: /\.js(x)*$/,
			exclude: /^node_modules$/,
			//loader: 'babel-loader'
			use: ['babel-loader']
		}, {
			test: /\.vue$/,
			use: ['vue-loader']

		},

			{
				test: /\.css$/,
				exclude: /^node_modules$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: "style-loader",
					loader: "css-loader",
					publicPath: "./"
				})
			}, {
				test: /\.less/,
				exclude: /^node_modules$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: "css-loader!less-loader",
					publicPath: "./"
				})
			},{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [{
					loader: "url-loader",
					query: {
						limit: 10000,
						name: 'imgs/[name].[hash:7].[ext]'
					}
				}]

			} ,{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				use: [{
					loader: "url-loader",
					query: {
						limit: 5000,
						name: 'fonts/[name].[hash:7].[ext]'
					}
				}]

			}

		]
	},
	plugins:[
		new ExtractTextPlugin(NODE_RUN === "0" ? "style.[hash].css" : "style.css"),
		new HtmlWebpackPlugin({
			filename: "../index.html",
			template: './src/index.html', //html模板路径
			favicon: "./src/imgs/goldfish.ico",
			inject: true, //允许插件修改哪些内容，包括head与body
			minify: { //压缩HTML文件
				removeComments: true, //移除HTML中的注释
				collapseWhitespace: false, //删除空白符与换行符
				//removeAttributeQuotes: true
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "commons",
			filename: NODE_RUN === "0" ? "common.[hash].js" : "common.js",
			minChunks: function (module, count) {
				return (module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0);
			}
		}),
		new webpack.ProvidePlugin({
			config: ROOT_PATH + "/src/js/config/" + NODE_ENV
		})
	],
	resolve: {
		extensions: ['.js', '.vue', '.jsx', '.less', '.scss', '.css'], //后缀名自动补全
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true
	},
	performance: {
		hints: false
	},

	devtool: '#eval-source-map'
}
var fileSystem = require('fs');
//打包状态
if(NODE_RUN === "0") {
	module.exports.devtool = false;
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			},
			sourceMap: false
		})
	]);

	var dirArray = [];
	var clearOutPutDir = function(path) {
		if(fileSystem.existsSync(path)) {
			var dirList = fileSystem.readdirSync(path);
			dirList.forEach(function(fileName) {
				if(fileSystem.statSync(path + fileName).isDirectory()) {
					console.info("目录:" + path + fileName);
					// 目录
					dirArray.push(path + fileName);
					clearOutPutDir(path + fileName + "/");
				} else {
					console.info("文件:" + path + fileName);
					fileSystem.unlinkSync(path + fileName);
				}
			});
		};
	}
	clearOutPutDir(OUT_PATH);
	for(var i = dirArray.length - 1, j = 0; i >= j; i--) {
		console.info(dirArray[i])
		fileSystem.rmdirSync(dirArray[i]);
	}
} else {
	console.info("run........................................");
	fileSystem.readFile("index.html", 'utf-8', function(err, data) {
		if(err) {
			console.log("error");
		} else {
			//清除hash值
			var devhtml = data.replace(/((?:href|src)="[^"]+\.)(\w{20}\.)(js|css)/g, '$1$3');
			fileSystem.writeFileSync('index.html', devhtml);
		}
	});
}
