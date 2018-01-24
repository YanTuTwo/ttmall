<template>
	<div class="productitem-wrap">
		<div class="productitem" v-for="(item,index) in productlist" @click="onProduct(item.id)">
			<Card style="width:240px;position: relative;height: 310px;" >
		        <div style="text-align:center" >
		            <img :src="item.imageUrl" style="width: 100%;">
		            <h4 class="productname">{{item.name}}</h4>
		            <p><img :src="item.countryIconUrl" class="countryIcon"/><span class="currentprice">￥{{item.price.toFixed(2)}}</span><span class="marketPrice">{{item.marketPrice.toFixed(2)}}</span></p>
		        </div>
		        <div class="producttype">
		        	<img src="../assets/images/icon_label1@3x.png" v-if="item.type==2"/>
		        	<img src="../assets/images/icon_label2@3x.png" v-if="item.type==1"/>
		        	<img src="../assets/images/icon_label3@3x.png" v-if="item.type==4"/>
		        </div>
		    </Card>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
		   	productdata:{
		   		type : Array,
		   		default : null
		   	}
	   	},
	    data(){
		   	return {
		   		productlist:[]
		   	}
	    },	
	    watch:{
	   		//监听父组件传入的数据进行组件的更新
	   		productdata(newValue, oldValue){
				if(newValue){
					this.productlist=newValue[0].itemList;			
				}
	   		}
	   	},
	   	methods:{
	   		onProduct(itemid){
	   			console.log(itemid);
//	   			this.$router.push('/goodsdetail?itemId='+itemid);
	   			this.$router.push({
                        name: 'goodsdetail',
                        query: {
                            itemid: itemid
                        }
	   			})
	   		}
	   	}
	}
</script>

<style lang="scss">
	.productitem-wrap {
		padding: 10px 3px;
	}	
	.productitem {
		float: left;
		cursor: pointer;
		margin: 4px;
		p {
			text-align: left;
			line-height: 20px;
		}
		img {
			width: 200px;
			height: 200px;
		}
		.countryIcon {
			width: 20px;
			height: 20px;
			vertical-align: top;
		}
	}	
	.currentprice {
		color: red;
		font-weight: bold;
		margin: 0 10px;
		font-size: 18px;
	}
	
	.marketPrice {
		text-decoration: line-through;
	}
	
	.productname {
		font-weight: 500;
		text-align: left;
		height: 40px;
		line-height: 20px;
		font-size: 14px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		text-align: left;
		margin-bottom: 10px;
	}
	
	.producttype {
		position: absolute;
		top: 0;
		right: 0;
		img {
			width: 50px;
			height: 50px;
		}
	}
</style>