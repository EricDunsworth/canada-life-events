module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		clean: {
			dist: ["dist"]
		},

		uglify: {
			options: {
				banner: "/*!\n * Canada.ca life events / Événements de la vie pour Canada.ca\n" +
				" * @license https://github.com/ServiceCanada/canada-life-events?tab=License-1-ov-file\n" +
				" * v<%= pkg.version %> - " + "<%= grunt.template.today('yyyy-mm-dd') %>\n*/"
			},

			dist: {
				files: {
					"dist/life-events.min.js": ["src/life-events.js"]
				}
			}
		},

		cssmin: {
			dist: {
				files: {
					"dist/life-events.min.css": ["src/life-events.css"]
				}
			}
		},

		usebanner: {
			taskName: {
				options: {
					position: "top",
					banner: "/*!\n * Canada.ca life events / Événements de la vie pour Canada.ca\n" +
					" * @license https://github.com/ServiceCanada/canada-life-events?tab=License-1-ov-file\n" +
					" * v<%= pkg.version %> - " + "<%= grunt.template.today('yyyy-mm-dd') %>\n*/",
					linebreak: true
				},
				files: {
					src: [ "dist/life-events.min.css" ]
				}
			}
		},

		htmllint: {
			all: {
				src: [
					"*.html",
					"pages/**/*.html"
				]
			},

			options: {
				"attr-name-style": "dash",
				"attr-quote-style": false,
				"id-class-style": "dash",
				"indent-style": "tabs",
				"indent-width": 4,
				"line-end-style": false,
				"attr-no-unsafe-char": false
			}
		},

		eslint: {
			options: {
				overrideConfigFile: ".eslintrc.json",
				quiet: true
			},
			target: ["Gruntfile.js", "src/life-events.js"]
		}
	});

	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-banner");
	grunt.loadNpmTasks("grunt-htmllint");
	grunt.loadNpmTasks("grunt-eslint");

	// Task to fix line endings after minification
	grunt.registerTask("fixLineEndings", function () {
		let content = grunt.file.read("dist/life-events.min.css");
		content = content.replace(/\r\n?/g, "\n");
		grunt.file.write("dist/life-events.min.css", content);
	});

	grunt.registerTask("default", ["clean", "htmllint", "eslint", "uglify", "cssmin", "usebanner", "fixLineEndings"]);
};
