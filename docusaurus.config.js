/** @type {import('@docusaurus/types').DocusaurusConfig} */
const math = require("remark-math");
const katex = require("rehype-katex");
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Python Tutorial",
  tagline: "Python tutorial and notes.",
  url: "https://pranabdas.github.io",
  baseUrl: "/python-tutorial/", // must have a trailing "/"
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "pranabdas", // Usually your GitHub org/user name.
  projectName: "python-tutorial", // Usually your repo name.
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      prism: {
        theme: require("prism-react-renderer/themes/github"),
        darkTheme: require("prism-react-renderer/themes/nightOwl"),
        additionalLanguages: ["docker"],
      },
      hideableSidebar: true,
      // colorMode: {
      //   defaultMode: "dark",
      //   switchConfig: {
      //     // darkIcon: '☾',
      //     // lightIcon: "☀️"
      //   },
      //   respectPrefersColorScheme: true,
      // },
      navbar: {
        title: "Python Tutorial",
        hideOnScroll: true,
        logo: {
          alt: "Logo",
          src: "img/favicon.ico",
        },
        items: [
          {
            to: "/",
            label: "Docs",
            position: "left",
            items: [
              {
                label: "Python Tutorial",
                to: "/",
              },
              {
                label: "~ ~ ~ Other Docs ~ ~ ~",
                to: "https://pranabdas.github.io/docs/",
                target: "_self",
              },
              {
                label: "ARPES Python Tools",
                to: "https://pranabdas.github.io/arpespythontools/",
                target: "_self",
              },
              {
                label: "Fortran Programming",
                to: "https://pranabdas.github.io/fortran/",
                target: "_self",
              },
              {
                label: "Linux Tutorial",
                to: "https://pranabdas.github.io/linux/",
                target: "_self",
              },
              {
                label: "Machine Learning Notes",
                to: "https://pranabdas.github.io/machine-learning/",
                target: "_self",
              },
              {
                label: "OpenMX tutorial",
                to: "https://pranabdas.github.io/openmx/",
                target: "_self",
              },
              {
                label: "Quantum Espresso Tutorial",
                to: "https://pranabdas.github.io/espresso/",
                target: "_self",
              },
              {
                label: "SUV Python Tools",
                to: "https://pranabdas.github.io/suvtools/",
                target: "_self",
              },
              {
                label: "Condensed Matter Notes",
                href: "https://pranabdas.github.io/docs/condmat-notes/",
              },
              {
                label: "Javascript Tutorial",
                href: "https://pranabdas.github.io/docs/js-learning/",
              },
              {
                label: "SUV ARPES Manual",
                href: "https://pranabdas.github.io/docs/arpes-man/",
              },
            ],
          },
          {
            to: "https://pranabdas.github.io",
            label: "About me",
            position: "left",
            target: "_self",
          },
          {
            href: "https://github.com/pranabdas/python-tutorial",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
            // target: "_self",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Pranab Das. All rights
      reserved.`,
      },
    }),

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl: "https://github.com/pranabdas/python-tutorial/blob/master/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

module.exports = config;
