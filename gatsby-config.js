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
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              // The property ID; the tracking code won't be generated without it
//trackingId: "G-X67GTHLLR0",
trackingId: "G-11111111",
              // Defines where to place the tracking script - `true` in the head and `false` in the body
              head: true,
              // Avoids sending pageview hits from custom paths
              exclude: ["/preview/**", "/do-not-track/me/too/"],
              // Delays sending pageview hits on route update (in milliseconds)
              pageTransitionDelay: 0,
              // Defers execution of google analytics script after page load
              defer: false,
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
