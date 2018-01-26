<template>
	<div class="goodsdetail">
		<Breadcrumb class="Breadcrumb">
	        <BreadcrumbItem to="/">Home</BreadcrumbItem>
	        <!--<BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>-->
	        <BreadcrumbItem>商品详情</BreadcrumbItem>
	    </Breadcrumb>
		<div class="productshow">
			<Carousel v-model="value1" loop :height="420" :radius-dot="true" v-show="!styleshow">
				<CarouselItem v-for="item in detaildata.imageList">
					<div class="demo-carousel"><img :src="item.imageUrl"/></div>
				</CarouselItem>
			</Carousel>
			<div class="productshowstyle" v-show="styleshow"><img src="../../build/logo.png"/></div>
			<div class="productbrand">
				<img :src="detaildata.brandIconUrl"/>
			</div>
			<div class="producttype">
		        <img src="../assets/images/icon_label1@3x.png" v-if="detaildata.type==2"/>
		        <img src="../assets/images/icon_label2@3x.png" v-if="detaildata.type==1"/>
		        <img src="../assets/images/icon_label3@3x.png" v-if="detaildata.type==4"/>
		    </div>
		</div>
		<div class="productdetail">
			<div class="countryIcon">
				<img :src="detaildata.countryIconUrl"/>{{detaildata.countryName}}直供
				<span>{{detaildata.deliveryPlaceType==1?'体验中心发货':(detaildata.deliveryPlaceType==2?'保税仓发货':'境外直邮')}}</span>
				<span><a href="#">预计{{detaildata.deliverDay}}送达>></a></span>
			</div>
			<h3>{{detaildata.name}}</h3>
			<p>{{detaildata.title}}</p>
			<div class="price">
				<dl>
					<dt>原价</dt>
					<dd class="marketPrice">￥{{marketPrice}}</dd>
				</dl>
				<dl>
					<dt>现价</dt>
					<dd class="nowprice">￥{{price}}</dd>
				</dl>
				<dl>
					<dt>进口税</dt>
					<dd v-if="detaildata.tax==0">已完税</dd>
					<dd class="tax" v-if="detaildata.tax!=0">{{detaildata.tax}}元/件 <span>了解税率</span></dd>
				</dl>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return{
//				itemId:$router.query.itemId
				value1:0,
				detaildata:{},
				styleshow:false,
				price:"",
				marketPrice:"",
			}
		},
		mounted(){
			this._getItemById();
			this._getGroupItemsById()
		},
		methods:{
			_getItemById(){
				axios.get('/bc/wx/item/GetItemById',{
					params:{
						v:310,
						source:3,
						id:this.$route.query.itemid
					}
				}).then((res)=>{
					console.log(res.data.data);
					this.detaildata=res.data.data;
					this.marketPrice=this.detaildata.marketPrice.toFixed(2);
					this.price=this.detaildata.price.toFixed(2);
				})
			},
			_getGroupItemsById(){
				axios.get('/bc/wx/item/GetGroupItemsById',{
					params:{
						v:310,
						id:this.$route.query.itemid,
						activityId:-1,
						
					}
				}).then((res)=>{
					console.log(res.data);
					
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.goodsdetail{
		overflow: hidden;
		.Breadcrumb{
			padding: 10px;
			margin-bottom: 10px;
		}
	}
	.productshow{
		float: left;
		border: 1px solid #ccc;
		width: 420px;
		height: 420px;
		position: relative;
		img{
			width: 100%;
			height: 100%;
		}
		.productbrand{
			cursor: pointer;
			position: absolute;
			top: 10px;
			left: 10px;
			>img{
				border-radius:50% ;
				border: 1px solid #f1f1f1;
				width: 48px;
				height: 50px;	
			}
		}
		.producttype{
			position: absolute;
			top: 0;
			right: 0;
			>img{
				width: 50px;
				height: 50px;
			}
		}
	}
	.productdetail{
		width: 500px;
		float: left;
		margin-left: 30px;
		h3{
			padding-bottom: 10px;
		    line-height: 1;
		    font-size: 18px;
		    font-weight: 700;
		    color: #000;
		}
		p{
			font-size: 14px;
			line-height: 16px;
			color: #999;
		}
		.countryIcon{
			font-size: 12px;
			color: #000000;
			margin-bottom: 10px;
			img{
				width: 20px;
				height: 20px;
				vertical-align: bottom;
				margin-right: 10px;
			}
			span{
				margin: 0 10px;
			}
			span + span{
				float: right;
				a{
					color: #ccc;				
				}
			}
		}
		.price{
			overflow: hidden;
			padding: 10px;
			background: #F1F1F1;
			margin-top: 10px;
			line-height: 30px;
			dt{
				float: left;
				font-size: 14px;
				color: #999;
			}
			dd{
				margin-left: 80px;
				
			}
			.marketPrice{
				text-decoration: line-through;
			}
			.nowprice{
				color: #FF0036;
				font-size: 30px;
			}
			.tax{
				span{
					float: right;
					font-size: 12px;
					color: #999;
					line-height: 30px;
				}
			}
		}
	}
</style>