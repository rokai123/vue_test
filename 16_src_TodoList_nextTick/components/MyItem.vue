<template>
    <li>
        <label>
            <input 
				type="checkbox"
				:checked="todo.done"
				@change="handleChecked(todo.id)"
			/>
			<!-- 也能实现改变勾选状态的功能，但是不推荐 -->
			<!-- <input 
				type="checkbox"
				v-model="todo.done"
			/> --> 
            <span v-show="!todo.isEdite">{{ todo.title }}</span>
			<input 
				type="text"
				v-show="todo.isEdite"
				:value="todo.title"
				@blur="handleBlur(todo,$event)"
				ref="inputTitle"
			>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
		<button class="btn btn-edit" @click="handleEdite(todo)" v-show="!todo.isEdite">编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'MyItem',
    props: ['todo'],
	methods: {
		handleChecked(id){
			//this.checkTodo(id);
			this.$bus.$emit('checkTodo', id);
		},
		handleDelete(id){
			//this.deleteTodo(id);
			// this.$bus.$emit('deleteTodo', id);
			pubsub.publish('deleteTodo', id);
		},
		handleEdite(todo){
			// todo.isEdite = true;
			if (Object.prototype.hasOwnProperty.call(todo, 'isEdite')) {
				todo.isEdite = true
			} else {
				this.$set(todo, 'isEdite', true)
			}
			this.$nextTick(() => {
				this.$refs.inputTitle.focus();
			})
		},
		//失去焦点回调（真正执行修改逻辑）
		handleBlur(todo,e){
			todo.isEdite = false;
			this.$bus.$emit('updateTodo',todo.id,e.target.value);
		}

	}
}
</script>

<style scoped>
/*item*/
	li {
		list-style: none;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		border-bottom: 1px solid #ddd;
	}

	li label {
		float: left;
		cursor: pointer;
	}

	li label li input {
		vertical-align: middle;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}

	li button {
		float: right;
		display: none;
		margin-top: 3px;
	}

	li:before {
		content: initial;
	}

	li:last-child {
		border-bottom: none;
	}

	li:hover{
		background-color: #ddd;
	}
	
	li:hover button{
		display: block;
	}

</style>