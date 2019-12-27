import Vue from 'vue'

import App from './App.vue'

//避免一些提示错误
Vue.config.productionTip = false

//说明App.vue这个文件属性应用级的文件
App.mpType = 'app'

//new实例vue对象
const app = new Vue(App)

//挂载，把vue转成小程序
app.$mount()
