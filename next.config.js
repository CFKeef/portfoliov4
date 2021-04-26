const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");
const withImages = require("next-images");
module.exports = withPlugins([withFonts, withImages], {
	i18n: {
		locales: ["en-US"],
		defaultLocale: "en-US",
	},
	webpack(config) {
		const { module = {} } = config;
		return {
			...config,
			module: {
				...module,
				rules: [
					...(module.rules || []),
					{
						test: /\.(pdf)$/,
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							publicPath: `/_next/static/files`,
							outputPath: "static/files",
						},
					},
				],
			},
		};
	},
});
