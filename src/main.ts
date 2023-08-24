// import './styles/main.scss'
// import pinia from './stores'
// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import App from './App.vue'
// import router from './router'
// import persist from 'pinia-plugin-persistedstate'
// const app = createApp(App)
// app.use(createPinia().use(persist))
// app.use(pinia)
// app.use(createPinia())
// app.use(router)

// app.mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores'
import router from './router'
// 样式全局使⽤
import vant from 'vant'
import 'vant/lib/index.css'
import './styles/main.scss'
const app = createApp(App)
app.use(vant)
app.use(pinia)
app.use(router)
app.mount('#app')
