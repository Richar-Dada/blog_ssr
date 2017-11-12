<template>
	<div>
		<div class="header">
			<div class="header-content">
				<img src="../assets/img/avatar.jpg" class="header-avatar" />
				<p>dadatang</p>
			</div>
		</div>
		<div class="munu-wrapper">
			<div class="menu">
				<el-menu
					:default-active="activeIndex2"
					class="el-menu-demo"
					mode="horizontal"
					@select="handleSelect"
					background-color="#545c64"
					text-color="#fff"
					active-text-color="#ffd04b">
					<el-menu-item index="1">首页</el-menu-item>
					<el-menu-item index="3"><a href="https://www.ele.me" target="_blank">关于</a></el-menu-item>
				</el-menu>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>
.header{
	height: 200px;
	background-color: #409EFF;
}
.header-content{
	width: 80px;
	height: 80px;
	margin: 0 auto;
	padding: 30px 0;
	text-align: center;
}
.header-avatar{
	width: 80px;
	height: 80px;
	border-radius: 50%;
}
.munu-wrapper{
	background-color: #545c64;
}
.menu{
	width: 1000px;
	margin: 0 auto;
}
</style>