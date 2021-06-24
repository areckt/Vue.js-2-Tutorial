new Vue({
  el: '#vue-app',
  data: {
    name: 'Arek',
    job: 'Frontend dev',
    website: 'https://www.youtube.com',
    websiteTag: '<a href="https://www.youtube.com">YouTube</a>',
  },
  methods: {
    greet: function (time) {
      return 'Good ' + time + ' ' + this.name + '!';
    },
  },
});
