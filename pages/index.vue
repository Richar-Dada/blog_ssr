<template>
  <div class="index">
    <el-row :gutter="20">
      <el-col class="el-col" :span="6" v-for="(o, index) in 8" :key="o">
        <el-card :body-style="{ padding: '10px' }">
          <img src="../assets/img/hamburger.png" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      name: 'dadatang',
      currentDate: new Date()
    })
  }
</script>

<style lang="scss" scoped>
  .index{
    max-width: 1000px;
    margin: 0 auto;
  }
  .el-col {
    margin-bottom: 20px;
    margin-top: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>


