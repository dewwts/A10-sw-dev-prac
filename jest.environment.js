// jsdom does not provide fetch, so expose Node's built-in fetch to tests
// that call the backend API (getVenues / getVenue).
const { TestEnvironment } = require('jest-environment-jsdom')

class JsdomWithFetchEnvironment extends TestEnvironment {
  constructor(config, context) {
    super(config, context)
    this.global.fetch = fetch
    this.global.Request = Request
    this.global.Response = Response
    this.global.Headers = Headers
  }
}

module.exports = JsdomWithFetchEnvironment
