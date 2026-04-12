<template>
	<div class="demo">
		<h2 class="title">学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
import pubsub from 'pubsub-js'
	export default {
		name:'MySchool',
		data() {
			return {
				name:'尚硅谷atguigu',
				address:'北京',
			}
		},
		mounted(){
			pubsub.subscribe('getStuName', (msg, stuName) => {
				console.log('学校组件接收到学生姓名：', stuName)
			})
		},
		beforeDestroy(){
			pubsub.unsubscribe('getStuName')
		},
	}
</script>

<style scoped>
	.demo{
		background-color: skyblue;
	}
</style>