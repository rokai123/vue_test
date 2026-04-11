<template>
	<div class="demo">
		<h2 class="title">学生姓名：{{name}}</h2>
		<h2 class="atguigu">学生性别：{{sex}}</h2>
		<button @click="sendStuNameToApp">点击我把学生姓名传给父组件</button>
		<button @click="unBind">点我解绑自定义事件</button>
	</div>
</template>

<script>
	export default {
		name:'MyStudent',
		data() {
			return {
				name:'张三',
				sex:'男'
			}
		},
		methods:{
			sendStuNameToApp(){
				this.$emit('atguigu',this.name,'123','456')
			},
			unBind(){
				this.$off('atguigu')
				// this.$off() //解绑所有事件
				// this.$off('atguigu',['atguigu', 'llll']) //解绑指定事件
				console.log('解绑成功')
			}
		}
	}
</script>

<style lang="less" scoped>
	.demo{
		background-color: pink;
		.atguigu{
			font-size: 40px;
		}
	}
</style>
