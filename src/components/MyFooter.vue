<template>
  <div class="todo-footer" v-show="showFooter">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkedAll($event)"/> -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <!-- <span>已完成{{ todos.filter(t => t.done).length }}</span> / 全部{{todos.length}} -->
      <span>已完成{{doneTodo}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearDoneTodo">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name: 'MyFooter',
    props:{
        todos:Array,
        checkAllTodo:Function,
        clearDoneTodo:Function
    },
    computed:{
        doneTodo(){
          return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
        },
        total(){
          return this.todos.length;
        },
        isAll:{
          get(){
            return this.doneTodo === this.total && this.total > 0;
          },
          set(val){
            this.checkAllTodo(val);
          }
          
        },
        showFooter(){
          return this.total > 0;
        }

    },
    methods:{
        /* checkedAll(e){
          // console.log(e.target.checked)
          this.checkAllTodo(e.target.checked);
        } */
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>