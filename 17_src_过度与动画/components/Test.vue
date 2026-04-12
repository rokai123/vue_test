<template>
  <div>
    <button @click="isShow=!isShow">显示/隐藏</button>
    <transition>
        <h1 v-show="isShow">你好啊！</h1>
    </transition>
    
  </div>
</template>

<script>
export default {
    name: 'MyTest',
    data() {
        return {
            isShow: true
        }
    },
}
</script>

<style>
    h1 {
        background-color: orange;
    }

    .v-enter-active {
        animation: atguigu 1s;
    }

    .v-leave-active {
        animation: atguigu 1s reverse;
    }
    @keyframes atguigu {
        from {
            transform: translateX(100px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
</style>