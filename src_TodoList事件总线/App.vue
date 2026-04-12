<template>
<div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <MyHeader :addTodo="addTodo"/> -->
      <MyHeader @addTodo="addTodo"/><!--使用自定义组件事件实现子传父-->
      <!-- <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/> -->
      <MyList :todos="todos"/>
      <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearDoneTodo="clearDoneTodo"/>
    </div>
  </div>
</div>
</template>

<script>
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
export default {
  name: 'App',
  data() {
        return {
            /* todos: [
                {id: "0001", title:'喫煙',done:true},
                {id: "0002", title: 'お酒飲む',done:false},
                {id: "0003", title: 'パーマ',done:false},
            ] */
           todos: JSON.parse(localStorage.getItem('todos')) || []
        }
    },
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
  methods:{
    // 添加一个todo对象
    addTodo(todoObj){
      this.todos.unshift(todoObj);
    },
    //勾选or取消勾选一个todo
    checkTodo(id){
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    //删除一个todo
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    //全选or全不选
    checkAllTodo(Allchecked){
      this.todos.forEach(todo => {
        todo.done = Allchecked;
      });
    },
    //清除已完成任务
     clearDoneTodo(){
      this.todos = this.todos.filter(todo => !todo.done);
     }

  },
  watch:{
    todos:{
      deep: true,
      handler(newValue){
        localStorage.setItem('todos', JSON.stringify(newValue));
      }
    }
  },
  mounted(){//组件挂载完成后监听事件总线上的事件
    this.$bus.$on('checkTodo', this.checkTodo);
    this.$bus.$on('deleteTodo', this.deleteTodo);
  },
  beforeDestroy(){//组件销毁前取消事件监听
    this.$bus.$off('checkTodo', this.checkTodo);
    this.$bus.$off('deleteTodo', this.deleteTodo);
  }
}

</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}



</style>
