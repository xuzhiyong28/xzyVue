<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>{{globalName}}</li>
      <li>{{getMyArray}}</li>
      <li>{{tmpAge}} - {{myArraySize}} - {{tmpName}}</li>
    </ul>
    <button @click="changeAge">更改年龄</button>
    <button @click="changeName">更改姓名</button>
  </div>
</template>

<script>
  import { mapState,mapMutations } from 'vuex';
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'HelloWorld',
        globalName: this.$store.state.name,
        getMyArray: this.$store.getters.getMyArray
      }
    },
    //计算属性
    computed: {
      ...mapState({
        tmpAge : state => state.age + 10,
        tmpName : state => state.name,
        myArraySize : state => state.myArray.length
      })
    },
    mounted() {
      this.$http.post('/news/index', {'name': 'xuzhiyong'}, response => {
        console.log("========输出返回值==========");
        console.log(response.status);
        console.log(response.data);
      });
      //this.$http.get('/news/index?name=xuzhiyong',{},response=>{});
    },
    methods : {
      changeAge : function(){
        this.$store.commit('updateAge' , 100)
      },
      changeName : function(){
        this.updateName('gaoyongshun');
      },
      ...mapMutations({
        updateName : 'updateName' // 将 `this.updateName()` 映射为 `this.$store.commit('updateName')`
      })
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
