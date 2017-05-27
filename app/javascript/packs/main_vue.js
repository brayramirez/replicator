/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %>
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue/dist/vue.esm';
import vueCustomElement from 'vue-custom-element';
import App from './app.vue';
import Score from './score.vue';
import Warship from './warship.vue';
import ReplicatorWarship from './replicator_warship.vue';

document.addEventListener('DOMContentLoaded', () => {

  Vue.use(vueCustomElement);

  Vue.customElement('authority-score', Score, {});
  Vue.customElement('active-warship', Warship, {});
  Vue.customElement('replicator-warship', ReplicatorWarship, {});

  // document.body.appendChild(document.createElement('hello'))
  // const app = new Vue({
  //   el: 'hello',
  //   template: '<App/>',
  //   components: { App }
  // })
  // Vue.component('hello', {
  //   template: '<App/>',
  //   components: { App }
  // })

  // Vue.component('score', {
  //   template: '<Score/>',
  //   components: { Score }
  // })


  // new Vue({
  //   el: '#app'
  // })

  // console.log(app)
})
