<template>
	<div>
		<h1 class="title">你好啊{{stuName}}</h1>
		<MySchool :getSchoolName="getSchoolName"/>
		<!-- <MyStudent @atguigu="getStudentName"/> -->
		<MyStudent ref="student"/><!--@click.native="show"绑定原生事件-->
	</div>
</template>

<script>
	import MyStudent from './components/Student'
	import MySchool from './components/School'

	export default {
		name:'App',
		components:{MySchool,MyStudent},
		data(){
			return{
				stuName:''
			}
		},
		methods:{
			getStudentName(stuName,...params){
				this.stuName = stuName
				console.log('额外参数：',params)
				this.stuName = stuName
			},
			getSchoolName(schoolName){
				alert('父组件接收到的学校名称是：'+schoolName)
			},
			
		},
		mounted(){
			/* setTimeout(()=>{
				//写法更灵活
				// this.$refs.student.$on('atguigu',this.getStudentName)
				this.$refs.student.$once('atguigu',this.getStudentName)
			},3000) */
			this.$refs.student.$on('atguigu',this.getStudentName)
			/* this.$refs.student.$on('atguigu',(name,...params)=>{
				console.log('额外参数：',params)
				this.stuName = name
			}) */
		}
	}
</script>

<style scoped> 
	.title{
		color: red;
	}
</style>
