/** @type {import('stylelint').Config} */
module.exports = {

	plugins: [ "@double-great/stylelint-a11y" ],
	rules: {

		// "alpha-value-notation": "number", //REVIEWED
		// "color-function-notation": "legacy", //REVIEWED

		// Suppress stylelint-config-recommended errors

		"media-feature-range-notation": "prefix", // Uses legacy syntax

		// TODO: Can I enable some of these? Are new options available? They might all be disabled by default...
		// Partially-enable stylelint-a11y rules
		// "a11y/content-property-no-static-value": null,
		// "a11y/font-size-is-readable": null,
		// "a11y/line-height-is-vertical-rhythmed": null,
		// "a11y/media-prefers-reduced-motion": null,
		// "a11y/media-prefers-color-scheme": null,
		// "a11y/no-display-none": null,
		// "a11y/no-obsolete-attribute": true,
		// "a11y/no-obsolete-element": null, // Treats menu and hgroup as false positives
		// "a11y/no-spread-text": true,
		// "a11y/no-outline-none": null,
		// "a11y/no-text-align-justify": null, // Bootstrap 3.4.x comes with a .text-justify class
		// "a11y/selector-pseudo-class-focus": null
	},
	overrides: [
		{
			files: [
				"**/*.css"
			],
			extends: [
				"stylelint-config-standard"
			],
			plugins: [
				"stylelint-order"
			],
			rules: {
				// Suppress stylelint-config-recommended errors
				//"no-duplicate-selectors": null,
				//"no-descending-specificity": null, // Extremely slow //partially-REVIEWED

				// Suppress stylelint-config-standard errors
				"comment-empty-line-before": null, //REVIEWED... might be too aggressive
				"number-max-precision": null, //REVIEWED... can't undo it since what's failing is a redeclaration of a Bootstrap grid's properties... ugh

				// Additional rules for replacing sass-lint
				"order/properties-alphabetical-order": true // keep this one enabled
			}
		}
	]
};
