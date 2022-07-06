/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "IOTA Wiki",
  "tagline": "The complete reference for IOTA",
  "url": "https://wiki.iota.org",
  "baseUrl": "/",
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "favicon": "img/favicon.ico",
  "trailingSlash": false,
  "organizationName": "iota-community",
  "projectName": "iota-wiki",
  "stylesheets": [
    "https://fonts.googleapis.com/css?family=Material+Icons",
    {
      "href": "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
      "integrity": "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
      "crossorigin": "anonymous"
    }
  ],
  "themeConfig": {
    "announcementBar": {
      "id": "govern",
      "content": "If you would like to get more involved in the future governance of Shimmer, IOTA, and the Assembly network, join the discussions with the community in our <a target=\"_blank\" href=\"https://govern.iota.org\">governance forum</a> 🏛️",
      "backgroundColor": "#5991c7",
      "textColor": "#ffffff",
      "isCloseable": true
    },
    "image": "img/iota-wiki.png",
    "algolia": {
      "appId": "YTLE56KAO4",
      "apiKey": "75358d60d302f7f93f630d63128abb03",
      "indexName": "iota",
      "contextualSearch": true,
      "searchParameters": {},
      "searchPagePath": "search"
    },
    "matomo": {
      "matomoUrl": "https://matomo.iota-community.org/",
      "siteId": "13"
    },
    "hotjar": {
      "applicationId": "2809821"
    },
    "imageZoom": {
      "selector": ".markdown :not(a) > img:not(.image-gallery-image):not(.image-gallery-thumbnail-image)",
      "options": {
        "background": "rgba(0, 0, 0, 0.6)"
      }
    },
    "imageSlider": {
      "videoPlaceholder": "/img/infographics/video-placeholder.png"
    },
    "prism": {
      "additionalLanguages": [
        "java",
        "rust",
        "solidity",
        "toml"
      ],
      "theme": {
        "plain": {
          "color": "#bfc7d5",
          "backgroundColor": "#292d3e"
        },
        "styles": [
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(105, 112, 152)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "string",
              "inserted"
            ],
            "style": {
              "color": "rgb(195, 232, 141)"
            }
          },
          {
            "types": [
              "number"
            ],
            "style": {
              "color": "rgb(247, 140, 108)"
            }
          },
          {
            "types": [
              "builtin",
              "char",
              "constant",
              "function"
            ],
            "style": {
              "color": "rgb(130, 170, 255)"
            }
          },
          {
            "types": [
              "punctuation",
              "selector"
            ],
            "style": {
              "color": "rgb(199, 146, 234)"
            }
          },
          {
            "types": [
              "variable"
            ],
            "style": {
              "color": "rgb(191, 199, 213)"
            }
          },
          {
            "types": [
              "class-name",
              "attr-name"
            ],
            "style": {
              "color": "rgb(255, 203, 107)"
            }
          },
          {
            "types": [
              "tag",
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 114)"
            }
          },
          {
            "types": [
              "operator"
            ],
            "style": {
              "color": "rgb(137, 221, 255)"
            }
          },
          {
            "types": [
              "boolean"
            ],
            "style": {
              "color": "rgb(255, 88, 116)"
            }
          },
          {
            "types": [
              "keyword"
            ],
            "style": {
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "doctype"
            ],
            "style": {
              "color": "rgb(199, 146, 234)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "color": "rgb(178, 204, 214)"
            }
          },
          {
            "types": [
              "url"
            ],
            "style": {
              "color": "rgb(221, 221, 221)"
            }
          }
        ]
      },
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "cards": [
      {
        "title": "Learn here ?",
        "image": "img/learn.svg",
        "link": "learn/about-iota/an-introduction-to-iota",
        "description": "Learn about IOTA, the Tangle, its features, industry applications, network and more."
      },
      {
        "title": "Participate",
        "image": "img/participate.svg",
        "link": "participate/support-the-network/about-nodes",
        "description": "Join the network and start using solutions built on top of the Tangle."
      },
      {
        "title": "Build",
        "image": "img/build.svg",
        "link": "build/welcome",
        "description": "Access documentation and guides to build with IOTA in Rust and other languages."
      }
    ],
    "navbar": {
      "hideOnScroll": true,
      "logo": {
        "alt": "IOTA Wiki Logo",
        "src": "img/logo.svg",
        "srcDark": "img/logo_dark.svg"
      },
      "items": [
        {
          "label": "Learn",
          "to": "learn/about-iota/an-introduction-to-iota",
          "activeBaseRegex": "^/learn/.*",
          "position": "left"
        },
        {
          "label": "Participate",
          "to": "participate/support-the-network/about-nodes",
          "activeBaseRegex": "^/participate/.*",
          "position": "left"
        },
        {
          "label": "Build",
          "to": "#",
          "layout": [
            "0 1 3 4",
            "0 1 3 4",
            "5 1 3 2",
            "5 1 3 2",
            ". 1 3 2",
            ". 1 3 2",
            ". 1 3 2"
          ],
          "items_": [
            {
              "label": "Getting Started",
              "items": [
                {
                  "label": "Getting Started",
                  "sublabel": "IOTA development basics",
                  "to": "build/welcome",
                  "icon": "",
                  "activeBaseRegex": "^/(build|blueprints)/.*"
                }
              ]
            },
            {
              "label": "Chrysalis (IOTA 1.5)",
              "items": [
                {
                  "label": "Chrysalis Docs",
                  "sublabel": "Mainnet documentation",
                  "to": "introduction/welcome",
                  "icon": "",
                  "activeBaseRegex": "^/introduction.*"
                },
                {
                  "label": "Bee Node",
                  "sublabel": "IOTA node written in Rust",
                  "to": "bee/welcome",
                  "icon": "",
                  "activeBaseRegex": "^/bee/.*"
                },
                {
                  "label": "Hornet Node",
                  "sublabel": "IOTA node written in Go",
                  "to": "hornet/welcome",
                  "icon": "",
                  "activeBaseRegex": "^/hornet/.*"
                },
                {
                  "label": "Chronicle Permanode",
                  "sublabel": "IOTA permanode",
                  "to": "chronicle.rs/welcome",
                  "icon": "",
                  "activeBaseRegex": "^/chronicle.rs/.*"
                }
              ]
            },
            {
              "label": "Coordicide (IOTA 2.0)",
              "items": [
                {
                  "label": "Coordicide Specs",
                  "sublabel": "Decentralizing IOTA",
                  "to": "IOTA-2.0-Research-Specifications/Preface",
                  "icon": "",
                  "activeBaseRegex": "IOTA-2.0-Research-Specifications/.*"
                },
                {
                  "label": "GoShimmer Node",
                  "sublabel": "IOTA 2.0 node",
                  "to": "goshimmer/welcome",
                  "icon": "",
                  "activeBaseRegex": "^/goshimmer/.*"
                }
              ]
            },
            {
              "label": "Libraries",
              "items": [
                {
                  "label": "Client",
                  "sublabel": "Interact with the IOTA network",
                  "to": "iota.rs/welcome",
                  "icon": "",
                  "activeBaseRegex": "^/iota.rs/.*"
                },
                {
                  "label": "Wallet",
                  "sublabel": "Build IOTA wallets",
                  "to": "wallet.rs/welcome",
                  "icon": "",
                  "activeBaseRegex": "^/wallet.rs/.*"
                },
                {
                  "label": "Stronghold",
                  "sublabel": "Handle secrets securely",
                  "to": "stronghold.rs/getting_started",
                  "icon": "",
                  "activeBaseRegex": "^/stronghold.rs/.*"
                },
                {
                  "label": "Identity",
                  "sublabel": "Identity framework",
                  "to": "identity.rs/introduction",
                  "icon": "",
                  "activeBaseRegex": "^/identity.rs/.*"
                },
                {
                  "label": "Streams",
                  "sublabel": "Share data securely",
                  "to": "streams/welcome",
                  "icon": "",
                  "activeBaseRegex": "^/streams/.*"
                }
              ]
            },
            {
              "label": "Smart Contracts",
              "items": [
                {
                  "label": "Wasp Node",
                  "sublabel": "Smart contract node",
                  "to": "smart-contracts/overview",
                  "icon": "",
                  "activeBaseRegex": "^/smart-contracts/.*"
                }
              ]
            },
            {
              "label": "Integrations",
              "items": [
                {
                  "label": "Streams and Identity",
                  "sublabel": "Integrate IOTA seamlessly",
                  "to": "integration-services/welcome",
                  "icon": "",
                  "activeBaseRegex": "^/integration-services/.*"
                }
              ]
            }
          ],
          "position": "left"
        },
        {
          "to": "/blog",
          "label": "Community Blog",
          "position": "right"
        },
        {
          "to": "/team",
          "label": "Team",
          "position": "right"
        }
      ]
    },
    "footer": {
      "links": [
        {
          "title": "LEARN",
          "items": [
            {
              "label": "About IOTA",
              "to": "learn/about-iota/an-introduction-to-iota"
            },
            {
              "label": "IOTA Token",
              "to": "learn/iota-token/buying-iota"
            },
            {
              "label": "Wallets",
              "to": "learn/wallets/what-is-a-wallet"
            },
            {
              "label": "Networks",
              "to": "learn/networks/iota-1.5-chrysalis"
            },
            {
              "label": "Glossary",
              "to": "learn/glossary"
            },
            {
              "label": "Research",
              "to": "learn/research/research-outline"
            },
            {
              "label": "Future of IOTA",
              "to": "learn/future/future-of-iota"
            }
          ]
        },
        {
          "title": "PARTICIPATE",
          "items": [
            {
              "label": "Support the network",
              "to": "participate/support-the-network/about-nodes"
            },
            {
              "label": "The Community",
              "to": "participate/the-community/discord"
            },
            {
              "label": "Partnerships",
              "href": "https://www.iota.org/solutions/partnerships"
            },
            {
              "label": "Funding",
              "to": "participate/funding/edf-funding"
            },
            {
              "label": "Use Cases",
              "to": "participate/use-cases/industry-applications"
            },
            {
              "label": "Frameworks",
              "to": "participate/frameworks/introduction"
            }
          ]
        },
        {
          "title": "BUILD",
          "items": [
            {
              "label": "Getting Started",
              "to": "build/welcome"
            },
            {
              "label": "Fundamentals",
              "to": "build/fundamentals/cryptography"
            },
            {
              "label": "Exchange Integration",
              "to": "build/exchange-integration/exchange-integration-guide"
            },
            {
              "label": "Tutorials",
              "to": "build/tutorials/twitch"
            }
          ]
        },
        {
          "title": "WIKI",
          "items": [
            {
              "label": "Team",
              "to": "team"
            },
            {
              "label": "Github",
              "href": "https://github.com/iota-community/iota-wiki"
            },
            {
              "label": "Docusaurus",
              "href": "https://docusaurus.io"
            },
            {
              "label": "Community Blog",
              "to": "blog"
            },
            {
              "label": "Contribute",
              "to": "participate/contribute-to-wiki/welcome"
            },
            {
              "label": "Imprint",
              "to": "https://www.iota.org/impressum"
            },
            {
              "label": "Privacy Policy",
              "to": "https://www.iota.org/privacy-policy"
            }
          ]
        }
      ],
      "logo": {
        "alt": "IOTA Logo",
        "src": "img/iota_logo.svg",
        "href": "https://www.iota.org"
      },
      "copyright": "© 2022 IOTA Wiki. Built with Docusaurus.",
      "style": "light"
    },
    "socials": [
      {
        "url": "https://www.youtube.com/c/iotafoundation",
        "backgroundColor": "var(--ifm-color-gray-900)"
      },
      {
        "url": "https://www.github.com/iotaledger/",
        "backgroundColor": "#2C3850"
      },
      {
        "url": "https://discord.iota.org/",
        "backgroundColor": "#4B576F"
      },
      {
        "url": "https://www.twitter.com/iota/",
        "backgroundColor": "#6A768E"
      },
      {
        "url": "https://www.reddit.com/r/iota/",
        "backgroundColor": "#7D89A1"
      },
      {
        "url": "https://www.linkedin.com/company/iotafoundation/",
        "backgroundColor": "#8995AD"
      },
      {
        "url": "https://www.instagram.com/iotafoundation/",
        "backgroundColor": "#99A5BD"
      }
    ],
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": false,
        "blog": {
          "showReadingTime": false,
          "blogSidebarCount": 0
        },
        "theme": {
          "customCss": "/work_dir/src/css/custom.css"
        },
        "sitemap": {
          "changefreq": "daily",
          "priority": 0.5
        }
      }
    ]
  ],
  "plugins": [
    "plugin-image-zoom",
    "docusaurus-plugin-matomo",
    "docusaurus-plugin-hotjar",
    "@docusaurus/plugin-ideal-image",
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "learn",
        "path": "internal/learn",
        "routeBasePath": "learn",
        "sidebarPath": "/work_dir/internal/learn/sidebars.ts",
        "editUrl": "https://github.com/iota-community/iota-wiki/edit/main/",
        "remarkPlugins": [
          null,
          null
        ],
        "showLastUpdateTime": true
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "participate",
        "path": "internal/participate",
        "routeBasePath": "participate",
        "sidebarPath": "/work_dir/internal/participate/sidebars.ts",
        "editUrl": "https://github.com/iota-community/iota-wiki/edit/main/",
        "remarkPlugins": [
          null,
          null
        ],
        "showLastUpdateTime": true
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "build",
        "path": "internal/build",
        "routeBasePath": "build",
        "sidebarPath": "/work_dir/internal/build/sidebars.ts",
        "editUrl": "https://github.com/iota-community/iota-wiki/edit/main/",
        "remarkPlugins": [
          null,
          null
        ],
        "showLastUpdateTime": true
      }
    ]
  ],
  "staticDirectories": [
    "./static"
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "scripts": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false
};
