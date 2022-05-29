export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "Zain",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "docs/doc1",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://webyang-male.github.io/practicalWriting/",
          "label": "Writing",
          "position": "left"
        },
        {
          "href": "https://github.com/webyang-male",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Style Guide",
              "to": "docs/doc1"
            },
            {
              "label": "Second Doc",
              "to": "docs/doc2"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Issues",
              "href": "https://github.com/webyang-male/yangdocs/issues"
            },
            {
              "label": "Discussions",
              "href": "https://github.com/webyang-male/yangdocs/discussions"
            },
            {
              "label": "Twitter(Official)",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub(Official)",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2022 Zain Website, Inc. Built with Docusaurus."
    }
  },
  "title": "赵同学",
  "tagline": "The gorgeous words,weak language,actually cannot replace what.",
  "url": "https://yangdocs.vercel.app/",
  "baseUrl": "/",
  "favicon": "img/docusaurus.png",
  "organizationName": "webyang-male",
  "projectName": "yangdocs",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "E:\\00hexo\\yangdocs\\sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "E:\\00hexo\\yangdocs\\src\\css\\custom.css"
        }
      }
    ]
  ]
};