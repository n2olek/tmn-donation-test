const path = require('path')

module.exports = {
	components: 'src/components/**/[A-Z]*.js',
	defaultExample: true,
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader',
				},
				{
					test: /\.(ttf|eot|woff|svg|jpg|png|gif)$/,
					loader: 'file-loader',
				},
			],
		}
  },
  require: [
    path.join(__dirname, 'public/css/styleguidist/reset.css'),
    path.join(__dirname, 'public/fonts/fonts.css'),
  ]
};
