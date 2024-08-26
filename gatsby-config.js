const metaConfig = require("./meta-config");
const { title, description, author, siteUrl, keywords, repo, socialLinks, gtag } = metaConfig;

module.exports = {
  pathPrefix: "/", // 저장소 이름을 입력. xxxx.github.io만 되어있으면 "/"만 하면됨
  siteMetadata: {
    title,
    description,
    author,
    siteUrl,
    keywords,
    repo,
    socialLinks,
    gtag,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { fields: [frontmatter___date], order: DESC }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: `RSS Feed`,
            match: "^/blog/",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-gtag",
      options: {
        trackingId: [gtag] , // 수정: 배열이 필요 없을 수 있습니다.
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/contents/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/profile.png`,   // 로고 이미지 경로
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    { //  2024.08.26 : 구글 애드센스 추가
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        googleAdClientId: "ca-pub-9127237138926489", // 애드센스에서 제공한 광고 클라이언트 ID
        head: true, // true로 설정하면 <head>에 스크립트가 삽입됩니다.
      },
    },
  ],
};
