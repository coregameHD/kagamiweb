const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Kagami',
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
        title: 'KagamiWeb.com',
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
            href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            label: 'Rickroll',
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
            title: 'Visual Novel',
            items: [
              {
                label: 'วิชวลโนเวลคืออะไร',
                to: '/docs/intro',
              },
              {
                label: 'แนะนำเกมวิชวลโนเวล',
                to: '/visualnovel/preview',
              },
              {
                label: 'อัพเดตข่าวสาร',
                href: 'https://www.facebook.com/kagamitranslation',
              },
              {
                label: 'กลุ่ม Community',
                href: 'https://www.facebook.com/groups/VisualNovelDiscussionTH',
              },
            ],
          },
          {
            title: 'Nihongo',
            items: [
              {
                label: 'ไวยากรณ์ภาษาญี่ปุ่น N1-N3',
                to: '/nihongo/grammar/index',
              },
              {
                label: 'เรียนภาษาญี่ปุ่น',
                href: 'https://www.facebook.com/kagaminihongo',
              },
            ],
          },
          {
            title: 'Blog',
            items: [
              {
                label: 'บทความล่าสุด',
                to: '/blog',
              },
              {
                label: 'คลังบทความ',
                to: '/blog/archive',
              },
              {
                label: 'แท็ก',
                to: '/blog/tags',
              },
            ],
          },
          {
            title: 'Others',
            items: [
              {
                label: 'เกี่ยวกับเว็บไซต์นี้',
                to: '/about',
              },
              {
                label: 'เกี่ยวกับผู้เขียน',
                to: '/blog/why-i-learn-japanese',
              },
            ],
          },
        ],
        copyright: `俺たちの間で交わす『夢』という単語も、持つ意味を変えつつある。<br>
        Copyright © ${new Date().getFullYear()} kagamiweb.com | 
        Built with <b style="color:#ff4081;">♥</b> by <b><a href="https://www.facebook.com/coregameHD">coregameHD</a></b>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    stylesheets: [
      'https://fonts.googleapis.com/css?family=Sen|Bai+Jamjuree',
    ],
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
