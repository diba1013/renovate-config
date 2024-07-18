/* eslint-disable no-undef */
module.exports = {
	branchPrefix: "renovate/",
	gitAuthor: `${process.env.RENOVATE_GIT_AUTHOR_NAME} <${process.env.RENOVATE_GIT_AUTHOR_EMAIL}>`,
	platform: "github",
	onboarding: false,
	autodiscover: true,
	autodiscoverFilter: ["diba1013/*"],
	hostRules: [
		{
			matchHost: "https://npm.pkg.github.com/",
			hostType: "npm",
			token: process.env.RENOVATE_GITHUB_PACKAGE_TOKEN,
		},
	],
	allowScripts: true,
	gitNoVerify: ["push"],
	allowedPostUpgradeCommands: [String.raw`^pnpm run [\w:-]+ \|\| true$`],
};
