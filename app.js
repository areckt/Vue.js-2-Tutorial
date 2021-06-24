new Vue({
  el: '#vue-app',
  data: {
    name: 'Arek',
    job: 'Frontend dev',
  },
  methods: {
    greet: function (time) {
      return 'Good ' + time + ' ' + this.name + '!';
    },
  },
});
