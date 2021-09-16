const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'KagamiWeb',
  tagline: 'เชื่อมโยงผู้คนด้วยเกมวิชวลโนเวลและภาษาญี่ปุ่น',
  url: 'https://kagamiweb.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/kagami_logo.png',
  organizationName: 'coregameHD', // Usually your GitHub org/user name.
  projectName: 'kagamiweb.com', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          blogTitle: 'Kagami Blog',
          blogDescription: 'เล่าบ่นก่นด่าประสาคนไอที',
          showReadingTime: false,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
          feedOptions: {
            type: 'all',
            title: 'Kagami Blog',
            description: 'เล่าบ่นก่นด่าประสาคนไอที',
            copyright: `Copyright © ${new Date().getFullYear()} Kagami Blog`,
            language: 'th-TH',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'KagamiWeb',
        logo: {
          alt: 'Kagami Logo',
          src: 'img/kagami_logo.png',
        },
        hideOnScroll: true,
        items: [
          {to: '/visualnovel', label: 'Visual Novel', position: 'left'},
          {to: '/nihongo', label: 'Nihongo', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/about', label: 'About', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            label: 'Facebook',
            position: 'right',
            items: [
              {label: 'Kagami Translation', href: 'https://www.facebook.com/kagamitranslation'},
              {label: 'Kagami Nihongo', href: 'https://www.facebook.com/kagaminihongo'},
              {label: 'Kagami Blog', href: 'https://www.facebook.com/kagamiblog'},
              {label: 'VisualNovelDiscussionTH', href: 'https://www.facebook.com/groups/VisualNovelDiscussionTH'},
            ],
          },
          {
            type: 'search',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          {
            title: 'More2',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        logo: {
          alt: 'Kagami Logo',
          src: '/img/logo.svg',
          href: 'https://kagamiweb.com/'
        },
        copyright: `Copyright © ${new Date().getFullYear()} kagamiweb.com | Built with ❤️ by coregameHD`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'visualnovel',
          path: 'visualnovel',
          routeBasePath: 'visualnovel',
          sidebarPath: require.resolve('./sidebarsVisualnovel.js'),
        },
      ],
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'nihongo',
          path: 'nihongo',
          routeBasePath: 'nihongo',
          sidebarPath: require.resolve('./sidebarsNihongo.js'),
        },
      ],
    ],
});
