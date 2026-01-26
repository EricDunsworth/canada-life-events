# Canada.ca Life Events

## Overview

This project is a Jekyll-based website template using the GCWeb theme. It integrates PostCSS for advanced CSS transformations and a Grunt build system to automate tasks such as minification, copying assets, and serving the site.

## Features

- **Jekyll** for static site generation
- **GCWeb Theme** for accessibility compliance
- **Grunt** for task automation

## GH Pages dev environement setup

 1. Fork the repository
 2. Activate GH Pages in your fork
 3. Edit your content through Github
 4. Open a pull request

## Local dev environement setup

### Prerequisites

Before you begin, ensure you have the following installed:

- **Ruby** (Check with `ruby -v`)
- **Bundler** (`gem install bundler`)
- **Node.js & npm** (Check with `node -v` and `npm -v`)
- **Grunt CLI** (`npm install -g grunt-cli`)


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

## File Structure
Jekyll website
```
project-root/
├── _config.yml       # Jekyll configuration
├── Gruntfile.js      # Task running
├── package.json      # Contain the version number of Canada.ca Life Events
├── Gemfile           # Ruby dependencies
└── README.md         # Project documentation
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)


## Security

See [SECURITY.md](SECURITY.md)


## License

See [LICENSE.md](https://github.com/ServiceCanada/oag-template/blob/main/LICENSE)
