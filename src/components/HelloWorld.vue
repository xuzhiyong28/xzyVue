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
    <h1>router-连接到其他页面</h1>
    <router-link to="/children">router-link-子节点</router-link>
    <h1>路由嵌套</h1>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <h1>组件</h1>
    <demo2 ref="demo2" :text="msg" @updateTest="updateDemoTest"></demo2>
  </div>
</template>

<script>
  import { mapState,mapMutations,mapActions  } from 'vuex';
  import demo2 from './DemoComponents2';
  export default {
    name: 'HelloWorld',
    components :{
      demo2
    },
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
        //this.$store.dispatch('syncUploadAge',200);
      },
      changeName : function(){
        this.updateName('gaoyongshun');
      },
      ...mapMutations({
        updateName : 'updateName' // 将 `this.updateName()` 映射为 `this.$store.commit('updateName')`
      }),
      updateDemoTest : function(text){
         this.msg = text;
         //this.$refs.xxx 也可以使用refs来调用子组件的data和方法
      }
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
