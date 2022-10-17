export default {
  title: "Darwin AG Dokumentation",
  description: "Just playing around.",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide" },
      { text: "Configs", link: "/configs" },
      { text: "Changelog", link: "https://github.com/..." },
    ],
    sidebar: [
      {
        text: "Grundlagen",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "NovoDaily.com",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Novogenia.com",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Introduction", link: "/introduction", items: [
            { text: "Introduction", link: "/introduction" },
            { text: "Getting Started", link: "/getting-started" },
          ] },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
  },
};
