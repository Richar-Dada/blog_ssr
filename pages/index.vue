<template>
  <div class="index">
    <el-row :gutter="20">
      <el-col class="el-col" :span="6" v-for="(item, index) in posts" :key="item.id">
        <el-card :body-style="{ padding: '10px' }">
          <img src="../assets/img/hamburger.png" class="image">
          <div style="padding: 14px;">
            <span>{{ item.tit }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.createDate | moment }}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    async asyncData () {
      let result = await axios.get('/api/blogs')
      return {
        posts: result.data.blogsList
      }
    },
    data () {
      return {
        currentDate: 123
      }
    }
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


