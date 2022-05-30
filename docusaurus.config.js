module.exports = {
  title: '赵同学',
  tagline: 'The gorgeous words,weak language,actually cannot replace what.',
  url: 'https://yangdocs.vercel.app/',
  baseUrl: '/',
  favicon: 'img/docusaurus.png',
  organizationName: 'webyang-male', // Usually your GitHub org/user name.
  projectName: 'yangdocs', // Usually your repo name.
  themeConfig: {
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    navbar: {
      title: 'Zain',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
        href: 'https://webyang-male.github.io/practicalWriting/',
        label: 'Writing',
        position: 'left',},
        {
          href: 'https://github.com/webyang-male',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Issues',
              href: 'https://github.com/webyang-male/yangdocs/issues',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/webyang-male/yangdocs/discussions',
            },
            {
              label: 'Twitter(Official)',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub(Official)',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zain Website, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    // String format.
    // 'https://gcore.jsdelivr.net/gh/webyang-male/CDN/docusaurus/js/custom.js',
    // Object format.
    {
      src: 'https://gcore.jsdelivr.net/gh/webyang-male/CDN/docusaurus/js/custom.js',
      async: true,
    },
  ],
};
