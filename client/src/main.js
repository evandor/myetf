import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import VueLogger from 'vuejs3-logger'
import router from './router'
import createApi from './Api'

import { createAuth0 } from '@auth0/auth0-vue';

// if (process.env.VUE_APP_ISSUER_URI == null || process.env.VUE_APP_CLIENT_ID == null || process.env.VUE_APP_SERVER_URI == null) {
//     throw 'Please define VUE_APP_ISSUER_URI, VUE_APP_CLIENT_ID, and VUE_APP_SERVER_URI in .env file'
// }

// const oktaAuth = new OktaAuth({
//     issuer: process.env.VUE_APP_ISSUER_URI,  // pulled from .env file
//     clientId: process.env.VUE_APP_CLIENT_ID,  // pulled from .env file
//     redirectUri: window.location.origin + '/callback',
//     scopes: ['openid', 'profile', 'email']
// })

const options = {
    isEnabled: true,
    logLevel: 'debug',
    stringifyArguments: false,
    showLogLevel: true,
    showMethodName: false,
    separator: '|',
    showConsoleColors: true
};

const app = createApp(App)
    .use(Quasar, quasarUserOptions)
    .use(VueLogger, options)
    .use(createAuth0({
            domain: process.env.VUE_APP_AUTH0_DOMAIN,
            clientId: process.env.VUE_APP_CLIENT_ID,
            authorizationParams: {
                redirect_uri: window.location.origin,
                audience: process.env.VUE_APP_AUTH0_AUDIENCE
            }
        })
    )
    .use(router)

app.config.globalProperties.$api = createApi(app.config.globalProperties.$auth)

app.mount('#app')