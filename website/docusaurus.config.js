module.exports = {
  title: 'RK Notes',
  tagline: 'Notes to run RK',
  url: 'https://rk-notes.netlify.com',
  baseUrl: '/notes/',
  favicon: 'img/favicon.png',
  organizationName: 'react-knowledgeable',
  projectName: 'rk-notes',
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
          href: 'https://reactknowledgeable.org/',
          label: 'Main Site',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} React Knowledgeable. Built with Docusaurus 2.`,
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
