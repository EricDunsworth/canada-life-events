# Canada.ca life events

## Overview

This project is a Jekyll-based website template using the GCWeb theme. It integrates PostCSS for advanced CSS transformations and a Grunt build system to automate tasks such as minification, copying assets, and serving the site.

## Roadmap

- **v1.x (in development):**
  - Create a Retirement Hub (RH) 2.0 thematic:
    - Use the [draft retirement thematic](https://github.com/wet-boew/GCWeb/pull/2691) as a starting point
- v2.x:
  - Integrate pre-existing life event thematics:
    - [What to do when someone dies (th-empathy)](https://wet-boew.github.io/GCWeb/m%C3%A9li-m%C3%A9lo/th-empathy/d%C3%A9tails-en.html)
    - [Welcoming a child (th-vitality)](https://wet-boew.github.io/GCWeb/m%C3%A9li-m%C3%A9lo/th-vitality/d%C3%A9tails-en.html)
- v3.x:
  - Consolidate custom CSS/JS where possible (i.e. "share" the same CSS across all life events, use event-specific overrides for colour schemes, etc...)
- Ongoing:
  - Standardize handy features and utility styles in WET/GCWeb (e.g. [tag filter "OR" option](https://github.com/wet-boew/wet-boew/pull/9904), `d-md-flex` class, etc...)
  - Backport bug fixes to WET/GCWeb (e.g. toggle `"print": "on"` setting keeping `details` elements expanded after printing, JSON manager requiring absolute JSON URLs, etc...)
  - Add "net-new" life events

## Features

- **Jekyll** for static site generation
- **GCWeb theme** for accessibility compliance
- **Grunt** for task automation

## GH Pages dev environment setup

 1. Fork the repository
 2. Activate GH Pages in your fork
 3. Edit your content through GitHub
 4. Open a pull request

## Local dev environment setup

### Prerequisites

Before you begin, ensure you have the following installed:

- **Ruby** (Check with `ruby -v`)
- **Bundler** (`gem install bundler`)
- **Node.js & npm** (Check with `node -v` and `npm -v`)
- **Grunt CLI** (`npm install -g grunt-cli`)

### Software (Windows)

- [Git for Windows](https://gitforwindows.org/)
- [Node.js](https://nodejs.org/en/download) (recommended version... i.e. [active LTS release](https://nodejs.org/en/about/previous-releases))
- [RubyInstaller for Windows](https://rubyinstaller.org/downloads/) (recommended **Ruby+Devkit** version)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/canada-life-events.git
   cd canada-life-events
   ```
2. Install dependencies:
   ```sh
   bundle install
   npm install
   ```
3. Build the assets and serve the site locally:
   ```sh
   bundle exec jekyll serve
   ```
   The site should now be accessible at `http://localhost:4000/`.

### Build distribution files
1. To build the distribution files, run:
   ```sh
   grunt
   ```
2. The processed files will be available in the `dist/` directory.

## File structure
Jekyll website
```
project-root/
├── _config.yml       # Jekyll configuration
├── Gruntfile.js      # Task running
├── package.json      # Contains the version number of Canada.ca life events
├── Gemfile           # Ruby dependencies
└── README.md         # Project documentation
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)


## Security

See [SECURITY.md](SECURITY.md)


## License

See [LICENSE.md](LICENSE)
