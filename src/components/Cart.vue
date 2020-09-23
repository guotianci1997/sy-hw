<template>
    <div class="cart-content">
        <div class="cart-box1" v-if="shoplist.length>0">
            <div class="cart-content-head">购物车<a href="#" @click="clear">清空</a></div>
            <div class="cart-box-list" v-for="(item,index) in shoplist" :key="index">
                <div style="width:15%;height:100%">
                    <input type="checkbox" name="" id="" checked>
                </div>
                <a href="#"><img :src="item.img" alt=""></a>
                <div class="cart-box-list-title">
                    <p style="color:#333;fontSize:14px;marginTop:30px">{{item.carttitle1}}</p>
                    <p style="color:#666;fontSize:12px">{{item.carttitle2}}</p>
                    <div class="fenqi">分期免息</div>
                    <div class="price">
                        <span>¥{{item.price}}元</span>
                        <div class="priceComputed">
                            <span class="minus" @click="minus(index)">－</span>
                            <span style="lineHeight:60px">{{cartnum}}</span>
                            <span class="plus" @click="plus(index)">＋</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="account">
                <div class="account-left">
                    <input type="checkbox" name="" id="" checked style="marginLeft:10px">
                    <span style="marginLeft:15px;color:#999">全选</span>
                </div>
                <span class="total"><span style="color:black">总计:</span>{{totalPrice}}元</span>
                <span class="accountall">结算({{cartnum}})</span>
            </div>
        </div>
        <div class="cart-box" v-else>
            <div class="cart-content-head">购物车</div>
            <div class="cart-content-mid">
                <div class="cart-content-mid-go">
                    <img src="../assets/Cartimg/cart.png" alt="">
                    <p style="color:#999;lineHeight:30px">您的购物车没有商品</p>
                    <a href="#" @click="gohome">去购物</a>
                </div>
                <div class="cart-content-mid-sale">热销推荐</div>
                <div class="cart-content-mid-sale-content">
                    <ul>
                        <li v-for="(item,index) in cartlist" :key="index">
                            <img :src="item.img" alt="">
                            <p style="fontSize:14px">{{item.title}}</p>
                            <p style="color:#ca141d;fontWeight:700;">{{item.price}}</p>
                            <a href="#" @click="goshopping(index)">购</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cartlist:[
                {
                    "img":require("../assets/Cartimg/cartimg1.png"),
                    "title":"HUAWEI P40 Pro",
                    "price":6488,
                    "carttitle1":"HUAWEI P40 Pro 5G 全网通 8GB+256GB（零度白）",
                    "carttitle2":" 零度白,5G全网通 8GB+256GB,官方标配"
                },
                {
                    "img":require("../assets/Cartimg/cartimg1.png"),
                    "title":"HUAWEI P40 Pro",
                    "price":1488,
                    "carttitle1":"HUAWEI P40 Pro 5G 全网通 8GB+256GB（零度白）",
                    "carttitle2":" 零度白,5G全网通 8GB+256GB,官方标配"
                },
                {
                    "img":require("../assets/Cartimg/cartimg1.png"),
                    "title":"HUAWEI P40 Pro",
                    "price":2488,
                    "carttitle1":"HUAWEI P40 Pro 5G 全网通 8GB+256GB（零度白）",
                    "carttitle2":" 零度白,5G全网通 8GB+256GB,官方标配"
                },
                {
                    "img":require("../assets/Cartimg/cartimg1.png"),
                    "title":"HUAWEI P40 Pro",
                    "price":3488,
                    "carttitle1":"HUAWEI P40 Pro 5G 全网通 8GB+256GB（零度白）",
                    "carttitle2":" 零度白,5G全网通 8GB+256GB,官方标配"
                },
                {
                    "img":require("../assets/Cartimg/cartimg1.png"),
                    "title":"HUAWEI P40 Pro",
                    "price":4488,
                    "carttitle1":"HUAWEI P40 Pro 5G 全网通 8GB+256GB（零度白）",
                    "carttitle2":" 零度白,5G全网通 8GB+256GB,官方标配"
                },
                {
                    "img":require("../assets/Cartimg/cartimg1.png"),
                    "title":"HUAWEI P40 Pro",
                    "price":5488,
                    "carttitle1":"HUAWEI P40 Pro 5G 全网通 8GB+256GB（零度白）",
                    "carttitle2":" 零度白,5G全网通 8GB+256GB,官方标配"
                }
            ],
            shoplist:[],
            cartnum:1,
            totalPrice:0
        }
    },
    methods:{
        gohome(){
            this.$router.push('/home')
        },
        goshopping(index){
            this.shoplist.push(this.cartlist[index])
            console.log(this.shoplist);
            this.totalPrice=this.cartnum*this.cartlist[index].price
        },
        clear(){
            this.shoplist=[]
            console.log(this.shoplist.length);
        },
        minus(index){
            if(this.cartnum>1){
                this.cartnum--
            }else{
                this.cartnum=1
            }
            this.totalPrice=this.cartnum*this.cartlist[index].price
        },
        plus(index){
            this.cartnum++;
            this.totalPrice=this.cartnum*this.cartlist[index].price
        },
    },
}
</script>

<style scoped>
.cart-content{
    width: 100%;
    height: 100%;
    /* background-color: #f9f9f9; */
}

.cart-box,.cart-box1{
    width: 100%;
    height: 100%;
}

.cart-box1{
    background-color: rgb(249, 249, 249);
    position: relative;
}

.cart-content-head{
    width: 100%;
    height: 8%;
    text-align: center;
    line-height: 46px;
    font-size: 20px;
    background-color: white;
}

.cart-content-mid{
    width: 100%;
    height: 92%;
    background-color: #f9f9f9;
    overflow: auto;
}

.cart-content-mid-go{
    width: 100%;
    height: 246px;
    background-color: #f9f9f9;
    text-align: center;
}

.cart-content-mid-go>img{
    margin-top: 30px;
}

.cart-content-mid-go>a{
    display: inline-block;
    width: 100px;
    height: 35px;
    border-radius: 20px;
    border: 1px solid rgba(51,51,51,.3);
    margin-top: 10px;
    text-align: center;
    color: #666;
    line-height: 35px;
}

.cart-content-mid-sale{
    width: 100%;
    height: 60px;
    background-color: #f9f9f9;
    text-align: center;
    line-height: 60px;
    font-size: 22px;
}

.cart-content-mid-sale-content,.cart-content-mid-sale-content ul{
    width: 100%;
    height: 750px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.cart-content-mid-sale-content li{
    display: block;
    width: 47.5%;
    height: 250px;
    text-align: center;
    border-radius: 20px;
    background-color: white;
    box-sizing: border-box;
    margin: 5px 5px 5px 5px;
    position: relative;
}

li>a{
    display: inline-block;
    position: absolute;
    top: 2%;
    right: 5%;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: rgb(236, 236, 236);
    text-align: center;
    line-height: 28px;
}

li>img{
    width: 150px;
    height: 150px;
    margin-top: 25px;
}

li>p{
    line-height: 30px;
}

.cart-box-list{
    width: 95%;
    height: 244px;
    margin: 0 auto;
    border-radius: 20px;
    background-color: white;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.cart-box-list input{
    margin-top: 80px;
    margin-left: 30px;
}


.cart-box-list>a{
    display: inline-block;
    width: 30%;
    height: 100%;
    text-align: center;
}

.cart-box-list img{
    width: 92px;
    height: 92px;
    margin-top: 30px;
}

.cart-box-list-title{
    width: 55%;
    height: 100%;
}

.price{
    width: 100%;
    height: 60px;
    display: flex;
}

.fenqi{
    font-size: 12px;
    height: 18px;
    width: 60px;
    border-radius: 10px;
    text-align: center;
    line-height: 18px;
    margin-top: 10px;
    border: 1px solid #ef5a62;
    color: #ef5a62;
}

.price>span{
    width:50%;
    line-height: 60px;
    display:inline-block;
    height:60px;
    color:#ca141d;
    font-weight:700
}

.priceComputed{
    width: 50%;
    height: 60px;
    display: flex;
}

.priceComputed>span{
    margin-left: 10px;
}

.minus,.plus{
    display: inline-block;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid rgb(214, 214, 214);
    margin-top: 16px;
    text-align: center;
}

.account{
    width: 100%;
    height: 60px;
    background-color: white;
    position: absolute;
    bottom: 0;
    display: flex;
    line-height: 60px;
}

.account-left{
    width: 40%;
    height: 100%;
    line-height: 60px;
}

.accountall{
    width: 25%;
    height: 40px;
    background-color: #e43e2d;
    margin-top: 10px;
    line-height: 40px;
    text-align: center;
    border-radius: 25px;
    color: white;
    font-size: 18px;
    margin-left: 10px;
}

.total{
    text-align: right;
    width: 30%;
    color: #ca141d;
    font-size: 18px;
}
</style>