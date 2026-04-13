<template>
  <div class="container">
    <SearchUser/>
    <UserList/>
  </div>
</template>

<script>
import SearchUser from './components/Search.vue'
import UserList from './components/List.vue'
export default {
  name: 'App',
  components: {
    SearchUser,
    UserList
  }
 
}
</script>

