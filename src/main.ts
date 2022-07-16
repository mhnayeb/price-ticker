import { createApp } from 'vue'
import App from './App.vue'
import Ticker from "./TickerPlugin"

const app = createApp(App)
app.use(Ticker)
app.mount('#app')
