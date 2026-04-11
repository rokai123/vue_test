<template>
	<div>
		<h1 class="title">你好啊</h1>
		<MySchool :getSchoolName="getSchoolName"/>
		<!-- <MyStudent @atguigu="getStudentName"/> -->
		<MyStudent :ref="student"/>
	</div>
</template>

<script>
	import MyStudent from './components/Student'
	import MySchool from './components/School'

	export default {
		name:'App',
		components:{MySchool,MyStudent},
		methods:{
			getStudentName(stuName){
				alert('父组件接收到的学生姓名是：'+stuName)
			},
			getSchoolName(schoolName){
				alert('父组件接收到的学校名称是：'+schoolName)
			}
		},
		mounted(){
			setTimeout(()=>{
				//写法更灵活
				// this.$refs.student.$on('atguigu',this.getStudentName)
				this.$refs.student.$once('atguigu',this.getStudentName)
			},3000)
			
		}
	}
</script>

<style scoped> 
	.title{
		color: red;
	}
</style>
