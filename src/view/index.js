import './style/base.scss'
import Vue from 'vue'
import View from './Root'

Vue.config.productionTip = false
Vue.filter('time', function (dt) {
  return `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`
})
Vue.filter('size', function (value) {
  let unit = 'B'
  if (value > 1024) {
    value = value / 1024
    unit = 'KB'
    if (value > 1024) {
      value = value / 1024
      unit = 'MB'
    }
  }
  return value.toFixed(1) + unit
})


export default new Vue({
  el: '#app',
  render (h) {
    return h(View)
  }
})
