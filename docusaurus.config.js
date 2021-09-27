const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'KagamiWeb.com',
  tagline: 'เชื่อมโยงผู้คนด้วยเกมวิชวลโนเวลและภาษาญี่ปุ่น',
  url: 'https://kagamiweb.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo_kagamiweb.png',
  organizationName: 'coregameHD',
  projectName: 'kagamiweb',

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
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: '🌙',
          lightIcon: '☀️',
          
        },
      },
      navbar: {
        title: 'KagamiWeb.com',
        logo: {
          alt: 'Kagami Logo',
          src: 'img/logo_kagamiweb.png',
        },
        hideOnScroll: true,
        items: [
          {to: '/visualnovel/preview', label: 'Visual Novel', position: 'left'},
          {to: '/nihongo/grammar', label: 'Nihongo', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/about', label: 'About', position: 'left'},
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
                to: '/visualnovel/preview',
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
                label: 'ไวยากรณ์ JLPT N1',
                to: '/nihongo/grammar/n1',
              },
              {
                label: 'ไวยากรณ์ JLPT N2',
                to: '/nihongo/grammar/n2',
              },
              {
                label: 'ไวยากรณ์ JLPT N3',
                to: '/nihongo/grammar/n3',
              },
              {
                label: 'คำศัพท์ภาษาญี่ปุ่นรายวัน',
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
                label: 'เกี่ยวกับ Kagami',
                to: '/about',
              },
              {
                label: 'เกี่ยวกับผู้เขียน',
                to: '/blog/why-i-learn-japanese',
              },
              {
                label: 'Github',
                href: 'https://github.com/coregameHD/kagamiweb',
              },
            ],
          },
        ],
        copyright: `後悔している、すべての人へ。<br>
        Copyright © ${new Date().getFullYear()} kagamiweb.com | 
        Built with <b style="color:#ff4081;">♥</b> by <b><a href="https://www.facebook.com/coregameHD">coregameHD</a></b>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      image: 'img/og_image.png',
    }),
    stylesheets: [
      'https://fonts.googleapis.com/css?family=Sen|Bai+Jamjuree',
    ],
    plugins: [
      [
        require.resolve('@cmfcmf/docusaurus-search-local'), {
          indexDocs: true,
          docsRouteBasePath: "/",
          indexDocSidebarParentCategories: 1,
          indexBlog: true,
          blogRouteBasePath: '/blog',
          indexPages: false,
          language: ["en", "ja", "th"],
          style: undefined,
        }
      ],
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