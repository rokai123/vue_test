<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1 v-text="msg" ref="myH1"></h1>
    <button @click="showDom">点我输出上方的dom元素</button>
    <MySchool ref="mySchool"></MySchool>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue.ll'
import MySchool from './components/School.vue'; 
export default {
  name: 'App',
  components: {
    MySchool
  },
  data(){
    return {
      msg: 'Hello World!'
    }
  },
  methods: {
    showDom(){
      console.log(this.$refs.myH1);
      console.log(this.$refs.mySchool);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
