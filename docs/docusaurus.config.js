// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MatCSS",
  tagline: "Another Modern Flat CSS Framework",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://matcss.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "matcsskit", // Usually your GitHub org/user name.
  projectName: "matcss", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/matcsskit/matcss/tree/main/docs/",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/MatCSSSocial.png",
      navbar: {
        title: "MatCSS",
        logo: {
          alt: "MatCSS",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "getting-started/installation",
            position: "left",
            label: "Getting Started",
          },
          // {
          //   type: "docsVersion",
          //   position: "right",
          //   label: "🚧 Canary",
          //   dropdownItemsAfter: [{ to: "/versions", label: "All versions" }],
          //   dropdownActiveClassDisabled: true,
          // },
          {
            href: "https://github.com/matcsskit/matcss",
            position: "right",
            className: "header-discord-link",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://github.com/matcsskit/matcss",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      versioning: {
        current: {
          label: "Canary",
          path: "canary",
        },
      },
      footer: {
        copyright: `Proudly crafted with pixels, passion, and a sprinkle of magic 🎉`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
