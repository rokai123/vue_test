<template>
	<div>
		<h1>当前求和为：{{sum}}</h1>
		<h1>放大10倍后为：{{bigSum}}</h1>
		<h1>我在{{school}}学校,学习{{subject}}</h1>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<!-- <button @click="JIA(n)">+</button>
		<button @click="JIAN(n)">-</button> -->
		<button @click="incrementOdd">当前求和为奇数再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
		computed: {
			...mapState(['sum','school','subject']),
			...mapGetters(['bigSum'])
		},
		methods: {
			/* increment(){
				this.$store.commit('JIA',this.n)
			}, */
			
			/* decrement(){
				this.$store.commit('JIAN',this.n)
			}, */
			//借助mapMutations简化代码，生成对应的方法，方法中会调用this.$store.commit('JIA')，并传入参数
			//对象的写法
			...mapMutations({increment:'JIA', decrement:'JIAN'}),
			//数组的写法
			//...mapMutations(['JIA','JIAN']),
			incrementOdd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			},
		},
		mounted() {
			mapState({
				sum: 'sum',
				school: 'school',
				subject: 'subject'
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
