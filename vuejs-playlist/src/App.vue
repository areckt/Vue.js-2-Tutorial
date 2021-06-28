<template>
  <div>
    <add-blog></add-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'

export default {
  components: {
    'add-blog': addBlog,
  },

  data () {
    return {

    }
  },

  methods: {}
}
</script>

<style>
body{
    margin: 0;
    padding: 5px;
    font-family: 'Helvetica';
}
</style>
