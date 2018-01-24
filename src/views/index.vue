<template>
	<div>
		<Tabs :value="currentname" @on-click="onTabSwitch" >
			<TabPane :label="item.name" v-for="(item,index) in tablist" :name="item.name">
				<TabDetail :tabpagedata="pagelist" :tabname="currentname"></TabDetail>
			</TabPane>			
	    </Tabs>		
	</div>
</template>

<script>
	import TabDetail from '@/views/tabdetail'
    import axios from 'axios'
  	export default {
	  	data(){
		  	return {
		  		tablist:[],		//页签数据
		  		pagelist:[], 	//数据
		  		currentcode:0,		//当前页签code
		  		currentname:"",		//当前页签name		  		
		  	}
	  	},
	  	components:{
	  		TabDetail
	  	},
	  	mounted(){
	  		this._gettablist();
	  	},
		methods:{		
			//获取tab数据
			_gettablist(){
				this.$Loading.start();
				let self = this
				axios.get('/bc/wx/page/tab/GetTabList',{
		  			params:{
		  				v:310
		  			}
		  		}).then(res=>{
		  			
		  			self._getpagebycodefirst(res.data);
		  			this.$Loading.finish();
		  		})
			},
			//第一次获取首页数据
			_getpagebycodefirst(listdata){
				let self = this
				axios.get('/bc/wx/page/tab/GetPageByCode',{
		  			params:{
		  				v:310,
		  				code: listdata.data[0].code
		  			}
			  }).then((res)=>{				  		
			  		self.pagelist=res.data.data;console.log(self.pagelist);			  		
			  		self.tablist=listdata.data;
	  				self.currentcode=self.tablist[0].code;
	  				self.currentname=self.tablist[0].name;
			  	})
			},
			//根据code值获取数据
			_getpagebycode(code){
				let self = this
				this.$Loading.start()
				axios.get('/bc/wx/page/tab/GetPageByCode',{
		  			params:{
		  				v:310,
		  				code: code
		  			}
			  }).then((res)=>{				  		
			  		self.pagelist=res.data.data;console.log(self.pagelist);
			  		this.$Loading.finish();
			  	})
			},
			//切换tab栏的点击事件
		  	onTabSwitch(name){
		  		console.log(name);
		  		for(var i=0;i<this.tablist.length;i++){
		  			if(name==this.tablist[i].name){
		  				console.log(this.tablist[i].code);
		  				this.currentcode=this.tablist[i].code;
		  				this.currentname=this.tablist[i].name;
		  			}
		  		}
		  		this._getpagebycode(this.currentcode);
		  	}
		}
	}	
</script>

<style scoped >
</style>