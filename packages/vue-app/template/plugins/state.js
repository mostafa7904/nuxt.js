export function install(app) {
  if (process.server) {
    app.$nuxt.state = {
      serverRendered: true,
      // data, fetch, vuex, etc.
    }
    app.$nuxt.ssrContext.nuxt = app.$nuxt.state
  }

	if (process.client) {
    app.$nuxt.state = window.__NUXT__ || {}
  }
}

export default {
  install
}
