<template>
	<div>
		<h1>当前求和为：{{sum}}</h1>
		<h3>放大10倍后为：{{bigSum}}</h3>
		<h3>我在{{school}}学校,学习{{subject}}</h3>
		<h3>下方组件的总人数是：{{personList.length}}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<!-- <button @click="JIA(n)">+</button>
		<button @click="JIAN(n)">-</button> -->
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
import {mapState, mapGetters, mapMutations,mapActions} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
		computed: {
			...mapState(['sum','school','subject','personList']),
			...mapGetters(['bigSum'])
		},
		methods: {
			//借助mapMutations简化代码，生成对应的方法，方法中会调用this.$store.commit('JIA')，并传入参数
			//对象的写法
			...mapMutations({increment:'JIA', decrement:'JIAN'}),
			//数组的写法
			//...mapMutations(['JIA','JIAN']),
			
			//...mapActions(['jiaOdd','jiaWait'])
			...mapActions({incrementOdd:'jiaOdd', incrementWait:'jiaWait'})
		},
		mounted() {
			mapState({
				sum: 'sum',
				school: 'school',
				subject: 'subject',
			}),
			mapGetters({
				bigSum: 'bigSum'
			})

		}
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
