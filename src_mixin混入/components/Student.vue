<template>
    <div>
        <h1>{{msg}}</h1><br>
        <h2>姓名:{{myName}}</h2>
        <h2>年龄:{{myAge+1}}</h2>
        <h2>性别:{{mySex}}</h2>
        <button @click="upDateAge">点击</button>
    </div>
</template>

<script>
import {mixin} from '../mixin.js'
export default {
    name: 'StudentInfo',
    data(){
        return {
            msg: '我是一个学生',
            myName:this.name,
            myAge:this.age,
            mySex:this.sex
        }
    },
    mixins:[mixin],
    

    // props:['name','age','sex'] //简单接受
   /*  props:{//接受的同时验证数据类型
        name: String,
        age: Number,
        sex: String
    } */
    props:{
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            default: 18
        },
        sex: {
            type: String,
            default: '男'
        }
    }
}
</script>

<style>

</style>