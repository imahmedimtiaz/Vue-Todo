require('./bootstrap');
import Vue from 'vue'
import App from './Vue/App'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faPlusSquare, faTrash )

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    el:'#app',
    components: { App }
});
