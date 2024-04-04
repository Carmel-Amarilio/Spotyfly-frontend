import { createStore } from 'vuex';
import contact from './modules/contact.js'
import user from './modules/user.js'

const options = {
    strict: true,
	
    modules: {
        // contact,
        // user
    }
}
const store = createStore(options)
export default store