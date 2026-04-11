<template>
  <div id="app">
    <h1 v-text="msg" ref="myH1"></h1>
    <!-- <StudentInfo name="李四" age="18" sex="女"></StudentInfo> -->
    <h1>----------------------------------------------------</h1>
    <StudentInfo name="李四" :age="19" sex="男"></StudentInfo>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue.ll'
import StudentInfo from './components/Student.vue'; 
export default {
  name: 'App',
  components: {
    StudentInfo
  },
  data(){
    return {
      msg: 'Hello World!'
    }
  },
 
}
</script>


