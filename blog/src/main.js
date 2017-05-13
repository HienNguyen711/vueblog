// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

// globally (in your main .js file)
Vue.component('icon', Icon)
Vue.use(VueMaterial)

Vue.material.registerTheme({
  app: {
    primary: 'cyan'
  },
  about: {
    primary: 'indigo'
  },
  contact: {
    primary: 'teal'
  }
})


//declare vue instance
new Vue({
  el: '#app',
  components: { App },
  render: (h) => h(App)
})

//first custom filter 
Vue.filter('addspace', (value) => {
  return value + ' ';
})

//fiter to uppercase
Vue.filter('uppercase', (value) => {
  return value.toUpperCase();
})

//css transition fade name
// Vue.transition('fade', {
//   css: false,
//   enter: function (el, done) {
//     // element is already inserted into the DOM
//     // call done when animation finishes.
//     $(el)
//       .css('opacity', 0)
//       .animate({ opacity: 1 }, 1000, done)
//   },
//   enterCancelled: function (el) {
//     $(el).stop()
//   },
//   leave: function (el, done) {
//     // same as enter
//     $(el).animate({ opacity: 0 }, 1000, done)
//   },
//   leaveCancelled: function (el) {
//     $(el).stop()
//   }
// })
