const withTM = require('next-transpile-modules')(["@lens-protocol/widgets-react"]);

module.exports = withTM({})
module.exports = {
  reactStrictMode: true,
}
