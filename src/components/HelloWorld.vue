<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>{{globalName}}</li>
      <li>{{getMyArray}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'HelloWorld',
        globalName: this.$store.state.name,
        getMyArray: this.$store.getters.getMyArray
      }
    },
    computed: {},
    mounted() {
      this.$http.post('/news/index', {'name': 'xuzhiyong'}, response => {});
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
