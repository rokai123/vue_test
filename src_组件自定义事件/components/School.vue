<template>
	<div class="demo">
		<h2 class="title">学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="sendSchoolNameToApp">获取学校名称</button>
	</div>
</template>

<script>
	export default {
		name:'MySchool',
		props:{
			getSchoolName: Function
		},

		data() {
			return {
				name:'尚硅谷atguigu',
				address:'北京',
			}
		},
		methods:{
			sendSchoolNameToApp(){
				this.getSchoolName(this.name)
			}
		}
	}
</script>

<style scoped>
	.demo{
		background-color: skyblue;
	}
</style>