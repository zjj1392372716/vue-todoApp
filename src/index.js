import Vue from 'vue'
import App from './app.vue'
import './assets/styles/global.styl'
const root = document.createElement('div'); // 根节点
document.body.appendChild(root);

new Vue({
  render: (h)=> h(App) // 将App渲染至根节点
}).$mount(root)