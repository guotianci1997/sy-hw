<template>
    <div class="content-box">
                <div class="content">
                    <router-view></router-view>
                </div>
                <div class="foot">
                    <div class="router-btn">
                        <router-link to="/home">首页</router-link>
                    </div>
                    <div class="router-btn">
                        <router-link to="/sort">分类</router-link>
                    </div>
                    <div class="router-btn">
                        <router-link to="/discover">发现</router-link>
                    </div>
                    <div class="router-btn">
                        <router-link to="/cart">购物车</router-link>
                    </div>
                    <div class="router-btn">
                        <router-link to="/me">我</router-link>
                    </div>
                </div>
            </div>
</template>

<script>
import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default {
    
}
</script>

<style scoped>
    .content-box{
        height: 100%;
        width: 100%;
    }

    .content{
        height: 92%;
        width: 100%;
        text-align: center;
    }

    .foot{
        height: 8%;
        width: 100%;
        display: flex;
        flex-direction: row;
        background-color: aqua;
    }

    .router-btn{
        width: 20%;
        height: 100%;
        text-align: center;
        line-height: 50px;
    }
</style>