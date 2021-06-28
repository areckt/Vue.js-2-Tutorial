<template>
  <div v-theme:column="'wide'" id="show-blogs">
      <h1>List Blog Titles</h1>
      <input type="text" v-model="search" placeholder="search blogs" />
      <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog">
          <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </div>
  </div>
</template>

<script>

import searchMixin from '../mixins/searchMixin';

export default {
  data () {
    return {
        blogs: [],
        search: '',
    }
  },

  methods: {

  },

  created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(data => {
          this.blogs = data.body.slice(0, 10);
      })
  },

  computed: {
  },

  filters: {
      'to-uppercase': function(value) {
          return value.toUpperCase();
      },
      'snippet': function(value) {
        let newValue = value.slice(0, 100);
        if (value.length > 100) {
          newValue += "...";
        }
        return newValue;
      }
  },

  directives: {
    'rainbow': {
      bind(el, binding, vnode) {
				el.style.color =
				"#" +
				Math.random()
					.toString()
					.slice(2, 8);
			}
    },
		'theme': {
			bind(el, binding, vnode) {
				if (binding.value == "wide") {
					el.style.maxWidth = "1200px";
				} else if (binding.value == "narrow") {
					el.style.maxWidth = "500px";
				}

				if (binding.arg == "column") {
					el.style.background = "#ddd";
					el.style.padding = "20px";
				}
			}
		}
  },

  mixins: [searchMixin],
}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
