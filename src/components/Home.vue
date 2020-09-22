<template>
    <div class="home-content">
        <div class="home-head-fixed">
        <div class="home-head-search">
            <div class="home-head-search-left">
            <img src="../assets/Homeimg/logo.png" alt />
            </div>
            <div class="home-head-search-mid">
            <div class="home-head-search-input">荣耀30</div>
            </div>
            <div class="home-head-search-right">
            <span>对话框&nbsp;&nbsp;&nbsp;登录</span>
            </div>
        </div>
        <div class="home-head-select">
            <div class="home-head-select-left">
            <a href="#">推荐</a>
            <a href="#">华为专区</a>
            <a href="#">荣耀专区</a>
            <a href="#">P40 系列</a>
            </div>
            <div class="home-head-select-right">图标</div>
        </div>
        </div>
        <div class="home-head">
        <div class="home-head-swiper">
            <swiper ref="mySwiper" :options="swiperOptions" class="swiperBox">
            <swiper-slide>
                <img
                src="https://res.vmallres.com/pimages//pages/picImages/13359661400616695331.jpg"
                alt
                />
            </swiper-slide>
            <swiper-slide>
                <img
                src="https://res.vmallres.com/pimages//pages/picImages/19847720700612774891.jpg"
                alt
                />
            </swiper-slide>
            <swiper-slide>
                <img
                src="https://res.vmallres.com/pimages//pages/picImages/74844532400613544847.jpg"
                alt
                />
            </swiper-slide>
            <swiper-slide>
                <img
                src="https://res.vmallres.com/pimages//pages/picImages/68327861600616872386.png"
                alt
                />
            </swiper-slide>
            <swiper-slide>
                <img
                src="https://res.vmallres.com/pimages//pages/picImages/64993538600613539946.jpg"
                alt
                />
            </swiper-slide>
            <swiper-slide>
                <img
                src="https://res.vmallres.com/pimages//pages/picImages/95964796200619746959.jpg"
                alt
                />
            </swiper-slide>
            <swiper-slide>
                <img
                src="https://res.vmallres.com/pimages//pages/picImages/02246861600616864220.jpg"
                alt
                />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div class="home-head-title">
            <img src="../assets/Homeimg/home-head-img1.png" alt />
        </div>
        <div class="home-head-swiper2">
            <swiper ref="mySwiper" :options="swiperOptions" class="swiperBox2">
            <swiper-slide class="swiper2">
                <a href="#">
                <div class="swiper2-img"></div>
                <p>会员领券</p>
                </a>
                <a href="#">
                <div class="swiper2-img"></div>
                <p>会员领券</p>
                </a>
                <a href="#">
                <div class="swiper2-img"></div>
                <p>会员领券</p>
                </a>
                <a href="#">
                <div class="swiper2-img"></div>
                <p>会员领券</p>
                </a>
                <a href="#">
                <div class="swiper2-img"></div>
                <p>会员领券</p>
                </a>
            </swiper-slide>
            <swiper-slide class="swiper2">
                <a href="#">
                <div class="swiper2-img"></div>
                <p>会员领券</p>
                </a>
                <a href="#">
                <div class="swiper2-img"></div>
                <p>会员领券</p>
                </a>
                <a href="#">
                <div class="swiper2-img"></div>
                <p>会员领券</p>
                </a>
                <a href="#">
                <div class="swiper2-img"></div>
                <p>会员领券</p>
                </a>
                <a href="#">
                <div class="swiper2-img"></div>
                <p>会员领券</p>
                </a>
            </swiper-slide>
            </swiper>
            <div class="swiper-pagination" slot="pagination"></div>
        </div>
        <div class="home-head-more">
            <a href="#" class="home-head-more-left">
            <img
                src="https://res.vmallres.com/nwap/20200715/images/echannelWap/logo/logo_wapHeadNews.png"
                alt
            />
            </a>
            <a href="#" class="home-head-more-mid">北京电影学院摄影系博士教你拍大片</a>
            <a href="#" class="home-head-more-right">更多</a>
        </div>
        <div class="home-head-sale">
            <span style="color:#4d4d4d;fontSize:20px;marginRight:5px">限时购</span>
            <span class="sale-icon"></span>
            <span style="color:#4d4d4d;fontSize:20px;marginRight:5px">{{hou}}:{{min}}:{{sec}}</span>
        </div>
        </div>
        <div class="home-mid">
            <div class="home-mid-tab">
            <div class="home-mid-tab2">
            <div class="home-mid-slide">
                <p class="home-mid-img">
                <a href="#">
                    <img src="../assets/Homeimg/home-mid-img1.png" alt class="img1" />
                </a>
                </p>
                <p class="home-mid-title">MatePad5G</p>
            </div>
            <p class="home-mid-price">预定立省100元</p>
            </div>
            <div class="home-mid-tab2">
            <div class="home-mid-slide">
                <p class="home-mid-img">
                <a href="#">
                    <img src="../assets/Homeimg/home-mid-img1.png" alt class="img1" />
                </a>
                </p>
                <p class="home-mid-title">MatePad5G</p>
            </div>
            <p class="home-mid-price">预定立省100元</p>
            </div>
            <div class="home-mid-tab2">
            <div class="home-mid-slide">
                <p class="home-mid-img">
                <a href="#">
                    <img src="../assets/Homeimg/home-mid-img1.png" alt class="img1" />
                </a>
                </p>
                <p class="home-mid-title">MatePad5G</p>
            </div>
            <p class="home-mid-price">预定立省100元</p>
            </div>
            <div class="home-mid-tab2">
            <div class="home-mid-slide">
                <p class="home-mid-img">
                <a href="#">
                    <img src="../assets/Homeimg/home-mid-img1.png" alt class="img1" />
                </a>
                </p>
                <p class="home-mid-title">MatePad5G</p>
            </div>
            <p class="home-mid-price">预定立省100元</p>
            </div>
            <div class="home-mid-tab2">
            <div class="home-mid-slide">
                <p class="home-mid-img">
                <a href="#">
                    <img src="../assets/Homeimg/home-mid-img1.png" alt class="img1" />
                </a>
                </p>
                <p class="home-mid-title">MatePad5G</p>
            </div>
            <p class="home-mid-price">预定立省100元</p>
            </div>
            <div class="home-mid-tab2">
            <div class="home-mid-slide">
                <p class="home-mid-img">
                <a href="#">
                    <img src="../assets/Homeimg/home-mid-img1.png" alt class="img1" />
                </a>
                </p>
                <p class="home-mid-title">MatePad5G</p>
            </div>
            <p class="home-mid-price">预定立省100元</p>
            </div>
            <div class="home-mid-tab2">
            <div class="home-mid-slide">
                <p class="home-mid-img">
                <a href="#">
                    <img src="../assets/Homeimg/home-mid-img1.png" alt class="img1" />
                </a>
                </p>
                <p class="home-mid-title">MatePad5G</p>
            </div>
            <p class="home-mid-price">预定立省100元</p>
            </div>
            <div class="home-mid-tab2">
            <div class="home-mid-slide">
                <p class="home-mid-img">
                <a href="#">
                    <img src="../assets/Homeimg/home-mid-img1.png" alt class="img1" />
                </a>
                </p>
                <p class="home-mid-title">MatePad5G</p>
            </div>
            <p class="home-mid-price">预定立省100元</p>
            </div>
            <div class="home-mid-tab2">
            <div class="home-mid-slide">
                <p class="home-mid-img">
                <a href="#">
                    <img src="../assets/Homeimg/home-mid-img1.png" alt class="img1" />
                </a>
                </p>
                <p class="home-mid-title">MatePad5G</p>
            </div>
            <p class="home-mid-price">预定立省100元</p>
            </div>
            <div class="home-mid-tab2">
            <div class="home-mid-slide">
                <p class="home-mid-img">
                <a href="#">
                    <img src="../assets/Homeimg/home-mid-img1.png" alt class="img1" />
                </a>
                </p>
                <p class="home-mid-title">MatePad5G</p>
            </div>
            <p class="home-mid-price">预定立省100元</p>
            </div>
            <div class="home-mid-tab2">
            <div class="home-mid-slide">
                <p class="home-mid-img">
                <a href="#">
                    <img src="../assets/Homeimg/home-mid-img1.png" alt class="img1" />
                </a>
                </p>
                <p class="home-mid-title">MatePad5G</p>
            </div>
            <p class="home-mid-price">预定立省100元</p>
            </div>
            <div class="home-mid-tab2">
            <div class="home-mid-slide">
                <p class="home-mid-img">
                <a href="#">
                    <img src="../assets/Homeimg/home-mid-img1.png" alt class="img1" />
                </a>
                </p>
                <p class="home-mid-title">MatePad5G</p>
            </div>
            <p class="home-mid-price">预定立省100元</p>
            </div>
            </div>
            <div class="home-mid-content">
            <ul class="home-mid-ul">
                <li class="home-mid-li1">
                <div class="home-mid-li1-img">
                    <a href="#">
                    <img src="../assets/Homeimg/home-mid-content-img1.png" alt />
                    </a>
                </div>
                </li>
                <li class="home-mid-li2">
                <div>
                    <a href="#">
                    <img
                        class="home-mid-content-img"
                        src="../assets/Homeimg/home-mid-content-img2.png"
                        alt
                    />
                    </a>
                </div>
                <div>
                    <a href="#">
                    <img
                        class="home-mid-content-img"
                        src="../assets/Homeimg/home-mid-content-img3.png"
                        alt
                    />
                    </a>
                </div>
                </li>
            </ul>
            </div>
            <div class="home-mid-content2">
        <ul class="home-mid-ul2">
            <li class="home-mid-li3">
            <a href="#">
                <img src="../assets/Homeimg/home-mid-content-img3.png" alt />
            </a>
            </li>
            <li class="home-mid-li3">
            <a href="#">
                <img src="../assets/Homeimg/home-mid-content-img3.png" alt />
            </a>
            </li>
        </ul>
        <ul class="home-mid-ul2">
            <li class="home-mid-li3">
            <a href="#">
                <img src="../assets/Homeimg/home-mid-content-img3.png" alt />
            </a>
            </li>
            <li class="home-mid-li3">
            <a href="#">
                <img src="../assets/Homeimg/home-mid-content-img3.png" alt />
            </a>
            </li>
        </ul>
            </div>
            <div class="channel-floor-list3">
        <ul class="home-mid-ul3">
            <li class="home-mid-li4">
            <div class="channel-floor-img">
                <a href="#">
                <img src="../assets/Homeimg/home-mid-content-img2.png" alt />
                </a>
            </div>
            <p class="channel-floor-title">HUAWEI P40 5G</p>
            <p class="channel-floor-data">享12期免息</p>
            <p class="channel-floor-price">￥4488</p>
            </li>
            <li class="home-mid-li4">
            <div class="channel-floor-img">
                <a href="#">
                <img src="../assets/Homeimg/home-mid-content-img2.png" alt />
                </a>
            </div>
            <p class="channel-floor-title">荣耀Play4T Pro</p>
            <p class="channel-floor-data">晒单抽好礼</p>
            <p class="channel-floor-price">￥1446</p>
            </li>
            <li class="home-mid-li4">
            <div class="channel-floor-img">
                <a href="#">
                <img src="../assets/Homeimg/home-mid-content-img2.png" alt />
                </a>
            </div>
            <p class="channel-floor-title">HUAWEI nova 7 Pro 5G</p>
            <p class="channel-floor-data">12期免息|限量赠好礼</p>
            <p class="channel-floor-price">￥3699</p>
            </li>
        </ul>
            </div>
            <div class="goodsRecommend">
                <div class="goodsRecommend-head">
                    <h2>手机</h2>
                </div>
            </div>
            <div class="home-mid-phone">
                <div class="home-mid-phone-content">
                    <div class="home-mid-phone-content-top">
                        <img src="https://res0.vmallres.com/pimages//product/6901443387984/428_428_CA16AD0891C031C45C53FB3909E9FF609CCA6C46C2581A76mp.png" alt="">
                        <p style="marginTop:10px;background:rgba(155,155,155,.1);lineHeight:30px;fontSize:14px;color:#9b9b9b">限量赠好礼</p>
                    </div>
                    <div class="home-mid-phone-content-bottom">
                        <p>HUAWEI nova SE 5G</p>
                        <p style="color:#ca141d;fontSize:14px">¥2399</p>
                    </div>
                </div>
                <div class="home-mid-phone-content">
                    <div class="home-mid-phone-content-top">
                        <img src="https://res0.vmallres.com/pimages//product/6901443388141/428_428_AE2A1F00B7D98D94AAB55AD59800475D6ADFA000C71CA40Fmp.png" alt="">
                        <p style="marginTop:10px;background:rgba(155,155,155,.1);lineHeight:30px;fontSize:14px;color:#9b9b9b">限量赠好礼</p>
                    </div>
                    <div class="home-mid-phone-content-bottom">
                        <p>HUAWEI nova SE 5G</p>
                        <p style="color:#ca141d;fontSize:14px">¥2399</p>
                    </div>
                </div>
            </div>
            <div class="home-mid-phone">
                <div class="home-mid-phone-content">
                    <div class="home-mid-phone-content-top">
                        <img src="https://res0.vmallres.com/pimages//product/6901443353125/428_428_843D9A399BDE267826C8BE3F0F68A903E015089FCD5087D9mp.png" alt="">
                        <p style="marginTop:10px;background:rgba(155,155,155,.1);lineHeight:30px;fontSize:14px;color:#9b9b9b">限量赠好礼</p>
                    </div>
                    <div class="home-mid-phone-content-bottom">
                        <p>HUAWEI nova SE 5G</p>
                        <p style="color:#ca141d;fontSize:14px">¥2399</p>
                    </div>
                </div>
                <div class="home-mid-phone-content">
                    <div class="home-mid-phone-content-top">
                        <img src="https://res0.vmallres.com/pimages//product/6972453164742/428_428_DA3EC111518BD3850225AFD2CA0127B75C37A020458A3864mp.png" alt="">
                        <p style="marginTop:10px;background:rgba(155,155,155,.1);lineHeight:30px;fontSize:14px;color:#9b9b9b">限量赠好礼</p>
                    </div>
                    <div class="home-mid-phone-content-bottom">
                        <p>HUAWEI nova SE 5G</p>
                        <p style="color:#ca141d;fontSize:14px">¥2399</p>
                    </div>
                </div>
            </div>
            <div class="home-bottom">发现更多手机</div>
            <div class="home-bottom-line"></div>
            <div class="home-bottom-title"><span style="marginRight:20px">登录</span><span style="color:#eaeaea">|</span><span style="marginLeft:20px">反馈</span></div>
            <div class="home-bottom-information">
                <div class="home-bottom-information-top">
                    <img src="../assets/Homeimg/information-title.png" alt="">
                </div>
                <div class="home-bottom-information-bottom">
                    <p>隐私政策 | 用户协议 | 关于Cookie</p>
                    <p> Copyright 2012-2020   VMALL.COM 版权所有</p>
                    <p>营业执照   备案主体编号：44201919072182</p>
                    <p>粤ICP备19015064号 粤公网安备 44190002003939号</p>
                    <p>增值电信业务经营许可证：粤B2-20190762</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
      loop: true,
      autoplay: true,
      hou: 0,
      min: 0,
      sec: 0,
    };
  },

  created() {
    let that = this;
    that.time();
  },

  methods: {
    time() {
      var that = this;
      var interval = setInterval(function timestampToTime() {
        var date = new Date("2020-10-10 00:00:00") - new Date();
        //new Date当前的时间戳，也可以换成自定义的时间戳
        if (date > 0) {
          let time = date / 1000;
          // 获取时、分、秒,毫秒
          that.hou =
            parseInt((time % (60 * 60 * 24)) / 3600) < 10
              ? "0" + parseInt((time % (60 * 60 * 24)) / 3600)
              : parseInt((time % (60 * 60 * 24)) / 3600);
          that.min =
            parseInt(((time % (60 * 60 * 24)) % 3600) / 60) < 10
              ? "0" + parseInt(((time % (60 * 60 * 24)) % 3600) / 60)
              : parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          that.sec =
            parseInt(((time % (60 * 60 * 24)) % 3600) % 60) < 10
              ? "0" + parseInt(((time % (60 * 60 * 24)) % 3600) % 60)
              : parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
          that.ssec = parseInt(((date % (60 * 60 * 24)) % 3600) / 60) % 10;
        } else {
          //活动已结束，全部设置为'00'
          // console.log("aaa")
          (that.day = "00"),
            (that.hou = "00"),
            (that.min = "00"),
            (that.sec = "00");
        }
      }, 100);
    },
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },

  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style scoped>
.home-content {
  height: 100%;
  width: 100%;
  overflow: auto;
}

.home-head-fixed {
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: white;
  z-index: 99;
}

.home-head {
  height: 52.5%;
  width: 100%;
  /* background-color: wheat; */
}

.home-head-search {
  width: 100%;
  height: 46px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: fixed;
  line-height: 46px;
}

.home-head-search-left {
  width: 20%;
  height: 100%;
  text-align: center;
}

.home-head-search-left img {
  width: 90%;
  height: 30%;
}

.home-head-search-mid {
  width: 55%;
  height: 100%;
  text-align: center;
}

.home-head-search-input {
  width: 90%;
  height: 80%;
  background-color: #f5f5f5;
  margin: auto;
  border-radius: 20px;
  margin-top: 5px;
  line-height: 36px;
}

.home-head-search-right {
  width: 25%;
  height: 100%;
}

.home-mid {
  height: 100%;
  width: 100%;
  /* background-color: wheat; */
}

.home-head-select {
  width: 100%;
  height: 39px;
  margin-top: 46px;
  line-height: 39px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.home-head-select-left {
  width: 85%;
  height: 100%;
  text-align: center;
  overflow-y: auto;
}

.home-head-select-left a {
  display: inline-block;
  width: 25%;
  color: rgb(119, 119, 119);
}

.home-head-select-right {
  width: 15%;
  height: 100%;
}

.home-head-swiper {
  height: 170px;
  width: 100%;
  background-color: aqua;
  margin-top: 80px;
}

.swiperBox,
swiper-slide {
  width: 100%;
  height: 100%;
  text-align: center;
}

.swiperBox img {
  width: 100%;
  height: 170px;
}

.swiper-pagination {
  margin-left: 120px;
}

.home-head-title,
.home-head-title > img {
  width: 100%;
  height: 35px;
}

.home-head-swiper2 {
  width: 100%;
  height: 60px;
}

.swiperBox2,
.swiperBox2 > swiper-slide {
  height: 60px;
  width: 100%;
}

.swiper2 > a {
  display: inline-block;
  width: 20%;
  height: 100%;
  text-align: center;
  color: black;
  font-size: 14px;
}

.swiper2-img {
  width: 34.5px;
  height: 34.5px;
  background-image: url("https://res.vmallres.com/pimages//squaredInfo/icon/8/1039046185271453e208f731a668e819.png");
  background-size: cover;
  margin: 0 auto;
}

.home-head-more {
  width: 100%;
  height: 46px;
  display: flex;
}

.home-head-more > a {
  display: inline-block;
  height: 100%;
  text-align: center;
  line-height: 46px;
}

.home-head-more-left {
  width: 20%;
}

.home-head-more-left > img {
  width: 55px;
  height: 15px;
}

.home-head-more-mid {
  width: 65%;
  color: #4d4d4d;
  font-size: 14px;
}

.home-head-more-right {
  width: 15%;
  color: #999;
  font-size: 14px;
}

.home-head-sale {
  width: 100%;
  height: 46px;
  text-align: center;
  line-height: 46px;
  background-color: #fafafa;
}

.sale-icon {
  width: 20px;
  height: 20px;
  display: inline-block;
  background-image: url(../assets/Homeimg/sale.png);
  background-size: cover;
}

.home-mid-tab {
  width: 100%;
  height: 118px;
  background-color: #fafafa;
  display: flex;
  overflow: auto;
  overflow-y: none;
}

.home-mid-slide {
  width: 87px;
  height: 99px;
  background-color: white;
  border-radius: 15px;
  margin-left: 10px;
}

.home-mid-img img {
  width: 70px;
  height: 70px;
}

.home-mid-title {
  font-size: 12px;
  color: #9d9d9d;
}

.home-mid-price {
  font-size: 13px;
  color: red;
  margin-left: 7px;
}

.home-mid-ul {
  display: flex;
  margin-top: 3px;
  width: 100%;
}

.home-mid-li1-img img {
  width: 100%;
  height: 282px;
}

.home-mid-content-img {
  width: 100%;
  height: 141px;
}

.home-mid-content2 {
  width: 100%;
  height: 280px;
  background: orangered;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  flex-direction: row;
}

.home-mid-ul2 {
  width: 50%;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  flex-direction: row;
}

.home-mid-li3 {
  width: 100%;
  height: 140px;
}

.home-mid-li3 img {
  width: 100%;
  height: 140px;
}

.channel-floor-list3 {
  margin-top: 3px;
  width: 100%;
  height: 205px;
}

.home-mid-ul3 {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  flex-direction: row;
  /* text-align: center; */
}

.home-mid-li4 {
  width: 32%;
  height: 205px;
  background: #f9f9f9;
  border-radius: 15px;
  margin-left: 4px;
  text-align: center;
}

.channel-floor-img {
  width: 90%;
  height: 103px;
  margin: 0 auto;
}

.home-mid-li4 img {
  margin-top: 15px;
  width: 75%;
  height: 83px;
}

.channel-floor-title {
  margin-top: 25px;
}

.channel-floor-title,
.channel-floor-data,
.channel-floor-price {
  font-size: 13px;
}

.channel-floor-data,
.channel-floor-title {
  color: #9b9b9b;
}

.channel-floor-data {
  padding: 0.2rem 0 0.15rem;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  bottom: 1rem;
  text-overflow: ellipsis;
  line-height: 1.2;
}

.goodsRecommend-head{
  width: 100%;
  height: 59px;
  margin-top: 20px;
}

.goodsRecommend-head h2{
  text-align: center;
  font-weight: 300;

}

.home-mid-phone{
    width: 100%;
    height: 260px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.home-mid-phone-content{
    width: 50%;
    height: 100%;
}

.home-mid-phone-content-top{
    height: 80%;
    width: 95%;
    background-color: #f9f9f9;
    border-radius: 30px;
    margin: 5px;
    box-sizing: border-box;
    text-align: center;
    overflow: hidden;
}

.home-mid-phone-content-top>img{
    width: 140px;
    height: 140px;
    margin-top: 25px;
}

.home-mid-phone-content-bottom{
    height: 20%;
    width: 100%;
    text-align: center;
}

.home-mid-phone-content-bottom p{
    line-height: 23px;
}

.home-bottom{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #4a4a4a;
}

.home-bottom-title{
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    color: #4a4a4a;
    border-bottom: #f8f8f8;
}

.home-bottom-line{
    width: 100%;
    height: 20px;
    background-color: #f9f9f9;
}

.home-bottom-information{
    width: 100%;
    height: 200px;
}

.home-bottom-information-top{
    width: 100%;
    height: 85px;
}

.home-bottom-information-bottom{
    width: 100%;
    height: 115px;
    text-align: center;
}

.home-bottom-information-bottom>p{
    color: #9b9b9b;
    font-size: 12px;
}





</style>