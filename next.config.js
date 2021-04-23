const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");
const withImages = require("next-images");
module.exports = withPlugins([withFonts, withImages], {
	i18n: {
		locales: ["en-US"],
		defaultLocale: "en-US",
	},
});
