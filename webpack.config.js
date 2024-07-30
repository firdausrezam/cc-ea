const path = require("path");

module.exports = {
	entry: "./assets/scripts/index.js",
	output: {
		filename: "script.js", // Output bundle file
		path: path.resolve(__dirname), // Output directory,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	resolve: {
		extensions: ["", ".js", ".json"],
	},
	devtool: "source-map", // Optional: generate source maps for easier debugging
};
