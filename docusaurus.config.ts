import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MCP Gearbox - Model Context Protocol Server Management',
  tagline: 'Simplify Model Context Protocol server management across AI agents',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://rohitsoni007.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/mcp-gearbox/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rohitsoni007', // Usually your GitHub org/user name.
  projectName: 'mcp-gearbox', // Usually your repo name.

  onBrokenLinks: 'throw',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rohitsoni007/mcp-gearbox/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rohitsoni007/mcp-gearbox/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    metadata: [
      {name: 'google-site-verification', content: 'QMpkN_eu_9Xli45PIGkSlaC_xucfSNF-Kp_3sTuRhqU'},
      {name: 'description', content: 'MCP Gearbox - Simplify Model Context Protocol server management across AI agents like GitHub Copilot, Continue, Kiro, Cursor, Claude, and more.'},
      {name: 'keywords', content: 'MCP, Model Context Protocol, GitHub Copilot, Continue, Kiro, Cursor, Claude, AI agents, server management, CLI, desktop app'},
    ],
    headTags: [
      // Open Graph tags for social sharing
      {
        tagName: 'meta',
        attributes: {
          property: 'og:title',
          content: 'MCP Gearbox - Model Context Protocol Server Management',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          property: 'og:description',
          content: 'Simplify Model Context Protocol server management across AI agents',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          property: 'og:type',
          content: 'website',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          property: 'og:url',
          content: 'https://rohitsoni007.github.io/mcp-gearbox/',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          property: 'og:image',
          content: 'https://rohitsoni007.github.io/mcp-gearbox/img/docusaurus-social-card.jpg',
        },
      },
      // Twitter card tags
      {
        tagName: 'meta',
        attributes: {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          name: 'twitter:title',
          content: 'MCP Gearbox - Model Context Protocol Server Management',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          name: 'twitter:description',
          content: 'Simplify Model Context Protocol server management across AI agents',
        },
      },
      {
        tagName: 'meta',
        attributes: {
          name: 'twitter:image',
          content: 'https://rohitsoni007.github.io/mcp-gearbox/img/mcp-gearbox.png',
        },
      },
    ],
    navbar: {
      title: 'MCP Gearbox',
      logo: {
        alt: 'MCP Gearbox Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/rohitsoni007/mcp-gearbox',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'MCP Gearbox CLI',
              to: '/docs/packages/mcp-gearbox-cli',
            },
            {
              label: 'MCP Gearbox Desktop',
              to: '/docs/packages/mcp-gearbox',
            },
            {
              label: 'MCP Gearbox JS',
              to: '/docs/packages/mcp-gearbox-js',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Issues',
              href: 'https://github.com/rohitsoni007/mcp-gearbox/issues',
            },
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/rohitsoni007/mcp-gearbox/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/rohitsoni007/mcp-gearbox',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MCP Gearbox. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;