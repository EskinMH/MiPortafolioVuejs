import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook,faInstagram,faGithub )


createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');

