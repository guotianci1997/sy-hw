<template>
    <div class="me">
        <div class="me-head-box">
            <div class="me-head-box1">
                <p class="me-heda-img">
                <img src="../assets/Homeimg/me-head-img1.png" alt="">
                </p>
                <p class="me-head-title">登录/注册 </p>
                    <p class="me-head-title-content">
                        <i></i>
                        <span class="title">签到领积分</span>
                    </p>
                   <div class="me-head-box1-img">
                       <span>图片</span>
                       <span>图片</span>
                   </div>
            </div>
        </div>
        <div class="me-content">
            <div class="me-content-box">
                <div class="me-content-box1">
                    <p>-</p>
                    <span class="me-content-paice">积分</span>
                    <span class="wire">|</span>
                </div>
                <div class="me-content-box1">
                    <p>-</p>
                     <span class="me-content-paice">优惠卷</span>
                     <span class="wire">|</span>
                </div>
                <div class="me-content-box1">
                    <p>-</p>
                     <span class="me-content-paice">代金卷</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.me{
    width: 100%;
    height: 100%;
    background: #f8f8f8;
}
.me-head-box{
    width: 100%;
    height: 30%;
    background: #e22c2f;
    border-radius: 20%;
}
.me-head-box1{
     width: 100%;
     height: 80%;
     background: #e22c2f;
     display: flex;
}

.me-heda-img {
    width: 69px;
    height: 69px;
    margin: 40px 0 0 20px ;
}

.me-heda-img img{
    width:100% ;
    height: 100%;
}

.me-head-title{
     margin: 50px 0 0 10px ;
     color: white;
     font-size: 23px;
}

.me-head-title-content {
    display: inline-block;
    width:100px;
    height:20px ;
    text-align: center;
    line-height: 20px;
    border-radius: 20px;
    background: rgba(109, 105, 109,0.4);
    position: relative;
    top: 80px;
    left:-100px ;
    margin-top: 5px;
}

.title{
    color: white;
    font-size: 14px;
}

.me-head-box1-img span{
    display: inline-block;
    color: white;
    margin-left: 10px;
}

.me-content{
     width: 95%;
    height: 15%;
    margin: 0 auto;
}

.me-content-box{
    width: 100%;
    height: 100%;
    background:white;
    border-radius: 20px;
    position: relative;
    top: -40px;
    display: flex;
}

.me-content-box1{
    text-align: center;
    width: 33.3%;
    height: 50%;
    margin-top: 25px;
  }

   .me-content-paice{
     display: inline-block;
      width: 95%;
      color: #666;
  }

  .me-content-box1 p{
      font-weight: 600;
  }

  .me-content-box1 .wire{
      color: #eaeaea;
      font-size: 20px;
      font-weight: lighter;
  }
</style>