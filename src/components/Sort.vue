<template>
  <div class="sort">
    <div class="sort-head">
      <p class="sort-head-p"><span>畅想20</span></p>
    </div>
    <div class="sort-content">
      <div class="sort-left">
          <div class="sort-left-div active"><a href="#"> 新品</a></div>
          <div class="sort-left-div"><a href="#">华为手机</a> </div>
          <div class="sort-left-div"><a href="#">荣耀手机</a> </div>
          <div class="sort-left-div"><a href="#"> 笔记本</a></div>
          <div class="sort-left-div"><a href="#">平板</a> </div>
          <div class="sort-left-div"><a href="#">智能穿戴&VR</a> </div>
          <div class="sort-left-div"><a href="#">智能屏</a> </div>
          <div class="sort-left-div"><a href="#">智能家居</a> </div>
          <div class="sort-left-div"><a href="#">耳机音箱</a> </div>
          <div class="sort-left-div"><a href="#">专属配件</a> </div>
          <div class="sort-left-div"><a href="#">通用配件</a> </div>
          <div class="sort-left-div"><a href="#">生态产品</a> </div>
          <div class="sort-left-div"><a href="#">增值服务</a> </div>
          <div class="sort-left-div"><a href="#">智能计算</a> </div>
      </div>
      <div class="sort-right">
          <div class="sort-right-content">
              <!-- <img src="../assets/Homeimg/sort-right-img1.png" alt=""><br>
              <img src="../assets/Homeimg/sort-right-img2.png" alt=""> -->
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sort {
  width: 100%;
  height: 100%;
}

.sort-head {
  width: 100%;
  height: 8%;
   /* padding-top: 5px; */
}

.sort-head-p {
  margin-left: 20px;
  width: 80%;
  height: 70%;
  background: #f5f5f5;
  border-radius: 30px;
  position: relative;
  top: 3px;
}

.sort-head-p span{
    color: rgb(194, 190, 190);
  font-size: 14px;
  line-height: 33px;
  margin-left: 10px;
}

.sort-content {
  width: 100%;
  height: 92%;
  display: flex;
  overflow: auto;
}

.sort-left{
    width: 30%;
    height: 100%;
    overflow: auto;
}

.sort-left-div{
    width: 100%;
    height: 51px;
}

.sort-left-div a{
    display: inline-block;
    width: 80%;
    margin-left: 15%;
    font-size: 15px;
    color: #000;
}

.sort-right{
    width: 70%;
    height: 100%;   
}

.sort-right-content{
    width: 95%;
    height: 146px;
    background: rosybrown;
    margin: 0 auto;
}
</style>