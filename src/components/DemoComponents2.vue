<template>
  <div>
    我是子组件:{{text}}
    <button @click="change">改变msg的值</button>
  </div>
</template>

<script>
    export default {
      name: "demo2-components2",
      props : {
        text : {
          type : Array
        }
      },
      data(){
          return {

          }
      },
      methods : {
        change : function(){
          this.$emit('updateTest','新的msg的值:World');
        }
      }
    }
</script>

<style scoped>

</style>
