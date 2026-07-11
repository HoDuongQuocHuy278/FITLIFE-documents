import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'FITLiFE',
  tagline: 'Hệ thống quản lý phòng gym thông minh',
  favicon: 'logo.png',
  url: 'https://HoDuongQuocHuy278.github.io',
  baseUrl: '/FITLIFE-documents/',
  organizationName: 'HoDuongQuocHuy278',
  projectName: 'FITLIFE-documents',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/HoDuongQuocHuy278/FITLIFE-documents/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [{ name: 'keywords', content: 'gym management, fitness, trainer, member, Laravel, React Native, Vue' }],
    image: 'img/Banner.png',
    navbar: {
      title: 'FITLiFE',
      logo: {
        alt: 'FITLiFE Logo',
        src: '/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/HoDuongQuocHuy278/FITLIFE-documents',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
              label: 'Giới thiệu',
              to: '/intro',
            },
            {
              label: 'Kiến trúc hệ thống',
              to: '/Architecture',
            },
            {
              label: 'API Services',
              to: '/Services',
            },
            {
              label: 'Hướng dẫn cài đặt',
              to: '/Installation',
            },
          ],
        },
        {
          title: 'GitHub Thành viên',
          items: [
            {
              label: 'Võ Thị Thái Ngọc',
              href: 'https://github.com/vothithaingoc05',
            },
            {
              label: 'Nguyễn Trần Nam Khánh',
              href: 'https://github.com/NamKhanh0809',
            },
            {
              label: 'Nguyễn Trần Khánh Huyền',
              href: 'https://github.com/ntkhanhhuyen25-01-2005',
            },
            {
              label: 'Trần Xuân Trường',
              href: 'https://github.com/xuantruong5',
            },
            {
              label: 'Nguyễn Nam Hùng',
              href: 'https://github.com/HungNguyen3205',
            },
            {
              label: 'Hồ Dương Quốc Huy',
              href: 'https://github.com/HoDuongQuocHuy278',
            },
          ],
        },
        {
          title: 'Liên hệ',
          items: [
            {
              label: 'Hồ Dương Quốc Huy',
              href: 'mailto:huyho2782005@gmail.com',
            },
            {
              label: 'Trần Xuân Trường',
              href: 'mailto:xuantruong081205@gmail.com',
            },
            {
              label: 'Nguyễn Nam Hùng',
              href: 'mailto:namhung03022005@gmail.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} FITLiFE. Built with ❤️ by FITLiFE Team.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
