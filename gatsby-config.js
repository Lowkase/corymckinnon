const {
    NODE_ENV,
    URL: NETLIFY_SITE_URL = 'https://www.corymckinnon.io',
    DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
    CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env

const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
    siteMetadata: {
      siteUrl: siteUrl,
      title: 'Cory Mckinnon Portfolio',
      keywords: 'Cory Mckinnon, design, designer, product design, portfolio, ui/ux, ux',
      description: 'Cory Mckinnon, product designer, lead ui/ux. Complex design problems simplified. A Designer with a passion for complex systems, big data, AI/ML and solving problems.',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              trackingIds: [
                "G-4XJYSFRSR9", // Google Analytics / GA
              ],
              pluginConfig: {
                head: true,
                delayOnRouteUpdate: 4,
              },
            },
        },        
        `gatsby-plugin-sass`,
        `gatsby-plugin-sitemap`,        
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                resolveEnv: () => NETLIFY_ENV,
                env: {
                    production: {
                        policy: [{ userAgent: '*' }],
                    },
                    'branch-deploy': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                    },
                    'deploy-preview': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                    },
                },
            },
        },
    ],
}
