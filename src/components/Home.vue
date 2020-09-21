<template>
    <div class="home-content">
        <div class="home-head">
            <div class="home-head-search"></div>
        </div>
        <div class="home-mid"></div>
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
.home-content{
    height: 100%;
    width: 100%;
    overflow: auto;
}

.home-head{
    height: 410px;
    width: 100%;
    /* background-color: wheat; */
}

.home-mid{
    height: 850px;
    width: 100%;
    background-color: blueviolet;
}

.home-head-search{
    width: 100%;
    height: 46px;
}
</style>