<template>
    <div>
        <section class="jumbotron">
            <h3 class="jumbotron-heading">Search Github Users</h3>
            <div>
                <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
                <button @click="searchUsers">Search</button>
            </div>
        </section>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'SearchUser',
    data() {
        return {
            keyWord: ''
        }
    },
    methods: {
        searchUsers() {
            //判断输入不为空
            if (this.keyWord.trim() === '') {
                alert('输入不能为空');
                return;
            }
            this.$bus.$emit('getUsers',{isFirst: false, isLoading: true, err: ''});
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    // console.log('success', response.data);
                    this.$bus.$emit('getUsers',{users: response.data.items, isLoading: false, err: ''});
                },
                error => {
                    // console.log('fail', error.message);
                    this.$bus.$emit('getUsers',{isLoading: false, err: error.message});
                }
            )
        }
    }
}
</script>

<style>

</style>