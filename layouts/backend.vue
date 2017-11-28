<template>
    <div>
        <el-container>
            <el-header>博客管理系统</el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open=""
                    @close="">
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">博客列表</span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">新增博客</span>
                        </el-menu-item>
                        <el-menu-item index="3">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <nuxt/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
