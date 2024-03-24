// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Daniel Elliott Docs',
  tagline: 'I write about things I learn and do',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.danielelliott.online',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ssfdre38', // Usually your GitHub org/user name.
  projectName: 'docusaurus-starter', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ssfdre38/docusaurus-starter/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Daniel Elliott Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/ssfdre38/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Daniel Elliott',
            items: [
              {
                label: 'Main Site',
                href: 'https://danielelliott.info',
              },
              {
                label: 'Github',
                href: 'https://github.com/ssfdre38',
              },
            ],
          },
          {
            title: 'Cubecoders',
            items: [
              {
                label: 'Cubecoders AMP',
                href: 'https://cubecoders.com/AMP',
              },
              {
                label: 'Cubecoders Discourse',
                href: 'https://discourse.cubecoders.com/',
              },
              {
                label: 'Cubecoders Discord',
                href: 'https://discord.gg/cubecoders',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Daniel Elliott, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
