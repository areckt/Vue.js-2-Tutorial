Vue.component('greeting', {
  template:
    '<p>Hey there, I am {{ name }}. <button v-on:click="changeName">Change Name</button></p>',
  data: function () {
    return {
      name: 'Arek',
    };
  },

  methods: {
    changeName: function () {
      this.name == 'Dawid' ? (this.name = 'Arek') : (this.name = 'Dawid');
    },
  },
});

new Vue({
  el: '#vue-app-one',
  data: {},

  methods: {},

  computed: {},
});

new Vue({
  el: '#vue-app-two',
  data: {},

  methods: {},

  computed: {},
});
