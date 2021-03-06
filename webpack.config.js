module.exports = {
	entry: __dirname + '/client/index.js', // The entry point for the Application (Where ReactDOM.render is called)
	mode: 'production', // change to 'production' before deploying
	module: {
		rules: [
			{
				test: [/\.(js|jsx)$/],
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
					},
				},
			},
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: 'file-loader',
				options: {
					name: '/public/icons/[name].[ext]'
				}
			},
			{
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
		],
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist',
	},
};