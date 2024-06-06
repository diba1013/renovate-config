module.exports = {
	branchPrefix: "renovate/",
	gitAuthor: "Renovate Bot <bot@renovateapp.com>",
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
};
