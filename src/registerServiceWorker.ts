/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.VUE_APP_NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(process.env.BASE_URL)
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered() {
      console.info('Service worker has been registered.')
    },
    cached() {
      console.info('Content has been cached for offline use.')
    },
    updatefound() {
      console.info('New content is downloading.')
    },
    updated() {
      console.info('New content is available; please refresh.')
    },
    offline() {
      console.info('No internet connection found. App is running in offline mode.')
    },
    error(error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
