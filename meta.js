module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "short_name": {
      "type": "string",
      "required": false,
      "message": "Project short name: fewer than 12 characters to not be truncated on homescreens (default: same as name)",
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "Pling project"
    },
    "port": {
      "type": "number",
      "required": true,
      "message": "Project port (set an unused port)"
    },
    "author": {
      "type": "string",
      "message": "Author (ignore this option default will be Pling)",
      "default": "Pling <contato@pling.net.br>"
    },
    "router": {
      "type": "confirm",
      "message": "Install vue-router?"
    },
    "vuematerial": {
      "type": "confirm",
      "message": "Install vue-material?"
    },
    "plingtoken": {
      "type": "confirm",
      "message": "Use pling-token?"
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Karma + Mocha?"
    },
    "e2e": {
      "type": "confirm",
      "message": "Setup e2e tests with Nightwatch?"
    }
  },
  "filters": {
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit",
    "test/e2e/**/*": "e2e",
    "src/views/**/*": "router"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
