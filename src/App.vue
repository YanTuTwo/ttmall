<template>
  <div id="app">
		<div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                    	<img src="./assets/logo.gif"/>
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                       	          首页推荐
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-color-filter"></Icon>
                           	洋货圈	
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="android-cart"></Icon>
                         	      购物车
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="android-person"></Icon>
                           	 我的
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Search></Search>
            <Content :style="{padding: '0 50px'}">              
                <Card>
                    <div style="min-height: 200px;">
                        <router-view></router-view>
                    </div>
                </Card>
            </Content>
            <Footer class="layout-footer-center">2017-2018 &copy; YanTuTu</Footer>
        </Layout>
    </div>
  </div>
</template>

<script>
	import Search from 'cs/search'
export default {
  name: 'App',  
  components:{
  	Search
  }
}
</script>

<style scoped>
#app{
	background: #f5f7f9;
	width: 100%;
	min-width: 1380px;
}
.ivu-menu{
  max-width: 1380px;
  min-width: 1200px;
  margin: 0 auto;	
}
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 50px;
    height: 50px;
    float: left;
    position: relative;
    top: 7px;
    left: 20px;
    border-radius: 50%;
    background: #fff;
    
}
.layout-logo img{
	width: 100%;
	height: 100%;
  border-radius: 50%;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 0px;
}
.layout-footer-center{				
    text-align: center;
}
.ivu-layout-content{
	width: 1380px;
  margin: 0 auto;	
}
</style>
