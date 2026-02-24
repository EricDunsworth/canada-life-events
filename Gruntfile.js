module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		clean: {
			dist: ["dist"]
		},

		uglify: {
			options: {
				banner: "/*!\n * Canada.ca Life events / Événements de la vie pour Canada.ca\n" +
				" * @license https://github.com/ServiceCanada/canada-life-events/?tab=MIT-1-ov-file\n" +
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
					banner: "/*!\n * Canada.ca Life events / Événements de la vie pour Canada.ca\n" +
					" * @license https://github.com/ServiceCanada/canada-life-events/?tab=MIT-1-ov-file\n" +
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
				"line-end-style": "lf",
				"attr-no-unsafe-char": false
			}
		},

		jshint: {
			all: {
				options: {
					esversion: 11,
					"-W067": true	// To ignore Unorthodox function invocation
				},
				src: ["Gruntfile.js", "src/life-events.js"]
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
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-banner");
	grunt.loadNpmTasks("grunt-htmllint");
	grunt.loadNpmTasks("grunt-eslint");

	// Task to fix line endings after minification
	grunt.registerTask("fixLineEndings", function () {
		let content = grunt.file.read("dist/life-events.min.css");
		content = content.replace(/\r\n?/g, "\n");
		grunt.file.write("dist/life-events.min.css", content);
	});

	grunt.registerTask("default", ["clean", "htmllint", "jshint", "eslint", "uglify", "cssmin", "usebanner", "fixLineEndings"]);
};
