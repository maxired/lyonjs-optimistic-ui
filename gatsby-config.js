let userConfig = {}
userConfig = require('./__now_gatsby_config_user.js')
module.exports = {
  ...userConfig,
  plugins: [
    ...(userConfig.plugins || []),
     'gatsby-theme-mdx-deck',
    'gatsby-plugin-now'
  ]
}
