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
        <span style="color:#4d4d4d;fontSize:20px;marginLeft:5px">{{hou}}:{{min}}:{{sec}}</span>
      </div>
    </div>
    <div class="home-mid"></div>
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
  height: 47.5%;
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
  background-color: blueviolet;
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
}

.sale-icon {
  width: 20px;
  height: 20px;
  display: inline-block;
  background-image: url(../assets/Homeimg/sale.png);
  background-size: cover;
}
</style>