<template>
	<div>
		<keep-alive>
			<Tabs :value="status" @on-click="onTabSwitch" >
				<TabPane :label="item.name" v-for="(item,index) in tablist">
					<TabDetail :tabpagedata="pagelist"  :status='status'></TabDetail>
				</TabPane>			
		    </Tabs>	
		</keep-alive>	
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
		  		status:this.$route.query.hasOwnProperty('status')==true?parseInt(this.$route.query.status):0
		  	}
	  	},
	  	components:{
	  		TabDetail
	  	},
	  	mounted(){
	  		this._gettablist();
	  		console.log(this.status);
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
		  				code: listdata.data[self.status].code
		  			}
			  }).then((res)=>{				  		
			  		self.pagelist=res.data.data;			  		
			  		self.tablist=listdata.data;
	  				self.currentcode=self.tablist[self.status].code;
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
			  		self.pagelist=res.data.data;
			  		this.$Loading.finish();
			  	})
			},
			//切换tab栏的点击事件
		  	onTabSwitch(name){
		  		this.$router.push({
		  			path:'/index',
		  			name:'index',
		  			query:{
		  				status:name
		  			}
		  		})
				this.currentcode=this.tablist[name].code;
		  		this._getpagebycode(this.currentcode);
		  	}
		},
		watch:{
			$route(){
				console.log("监控"+this.$route.query.status)
				this.status=parseInt(this.$route.query.status);
			}
		}
		
	}	
</script>

<style scoped >
</style>