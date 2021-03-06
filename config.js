/**
 * Configuration
 * =============
 *
 * These are Datt-wide configuration settings. Set these environment variables
 * to change the behavior of Datt.
 */
'use strict'
require('fullnode/config')

// By default, we assume browser-loaded javascript is served from the root
// directory, "/", of the http server. karma, however, assumes files are in the
// "/base/" directory, thus we invented this variable to allow overriding the
// directory. If you wish to put your javascript somewhere other than root,
// specify it by setting this environment variable before building. Some people
// will also need it if they need to put their js in some specific location.
if (!process.env.DATT_JS_BASE_URL) {
  process.env.DATT_JS_BASE_URL = '/'
}

if (!process.env.DATT_JS_BUNDLE_FILE) {
  process.env.DATT_JS_BUNDLE_FILE = 'datt.js'
}

if (!process.env.DATT_JS_TESTS_FILE) {
  process.env.DATT_JS_TESTS_FILE = 'datt-tests.js'
}

if (!process.env.DATT_BLOCKCHAIN_API_URI) {
  process.env.DATT_BLOCKCHAIN_API_URI = 'https://insight.bitpay.com/api/'
}

module.exports = process.env
