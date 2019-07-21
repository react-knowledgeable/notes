module.exports = {
  title: 'RK Notes',
  tagline: 'Notes to run RK',
  url: 'https://react-knowledgeable.github.io',
  baseUrl: '/notes/',
  favicon: 'img/favicon.ico',
  organizationName: 'react-knowledgeable',
  projectName: 'notes',
  themeConfig: {
    navbar: {
      title: 'RK Notes',
      logo: {
        alt: 'RK notes logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          label: 'Read RK',
          position: 'right',
          to: 'event-flow',
        },
        {
          href: 'https://github.com/react-knowledgeable/notes/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} React Knowledgeable. Built with ♡ and Docusaurus 2.`,
    },
    gtag: {
      trackingID: 'UA-136098806-1 ',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../content',
          routeBasePath: '',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
