<template>
	<div>
		<div v-if="status=='0'">
			<div class="activity" v-for="(item,index) in tabpagedata">
				<div class="swiper" v-if="item.code=='banner'&&item.dataType==1">
					<Carousel v-model="value1" loop  autoplay :height="450">
					    <CarouselItem v-for="banneritem in item.imageList">
					         <div class="demo-carousel"><img :src="banneritem.imageUrl"/></div>
					    </CarouselItem>
					</Carousel>
				</div>
				<div class="gongge" v-if="item.code=='gongge'&&item.dataType==1">
					<Card style="width:25%;height: 180px;" v-for="gonggeitem in item.imageList">
					    <div style="text-align:center">
					        <img :src="gonggeitem.imageUrl">
					        <p>{{gonggeitem.title}}</p>
					    </div>
					</Card>
				</div>
				<div class="towPoint" v-if="item.code=='towPointFiveImage'&&item.dataType==1">
					<div class="towPoint_title"><span>一</span>{{item.title}}<span>一</span></div>
					<div class="towPoint_swiper">
						<div class="towPoint_swiperwrap" ref="swiperwidth" style="width: 1000%;overflow: hidden;">
							<div class="towPoint_img" v-for="(towPointitem,index) in item.imageList">
								<img :src="towPointitem.imageUrl" />
							</div>
						</div>
						<div class="towPoint_prev" v-show="towPointpage>1">
							<Icon type="chevron-left"></Icon>
						</div>
						<div class="towPoint_next" v-show="item.imageList.length>6">
							<Icon type="chevron-right"></Icon>
						</div>
					</div>					
				</div>
				<div class="todaysale" v-if="item.code=='onePointFiveImage'&&item.dataType==1">
			
				</div>
				<div class="todaysale" v-if="item.code=='oneItem'&&item.dataType==2">
			
				</div>				
				<div class="todaysale" v-if="item.code=='towItem'&&item.dataType==2">
			
				</div>
				<div class="todaysale" v-if="item.code=='lrrAd'&&item.dataType==1">
			
				</div>
				<div class="todaysale" v-if="item.code=='llrAd'&&item.dataType==1">
			
				</div>
				<div class="todaysale" v-if="item.code=='seckillTwo'&&item.dataType==1">
			
				</div>
			</div>
		</div>
		
		
		<div class="listview" v-if="status!='0'">
			<Tablistview :productdata="tabpagedata"></Tablistview>
		</div>
	</div>
</template>

<script>
	import Tablistview from "cs/tablistview"
  	export default {
	    props:{
		   	tabpagedata:{
		   		type : Array,
		   		default : null
		   	},
		   	status:{
		   		type:Number,
		   	}
	   	},
	   	components:{
	   		Tablistview
	   	},
	   	mounted(){

	   	},
	   	data(){
	   		return{
	   			value1:0,
	   			value2:0,
				towPointpage:0,
				towPointindex:0
	   		}
	   	},
	   	methods:{

	   	}
	}	
</script>

<style scoped lang="scss">
	.swiper {
		width: 100%;
		margin-bottom: 10px;
		img {
			width: 100%;
			height: 100%;
		}
	}
	
	.gongge {
		img {
			width: 120px;
			height: 120px;
		}
		&>div {
			display: inline-block;
			cursor: pointer;
		}
	}
	
	.towPoint {
		overflow: hidden;
		padding: 10px 0;
	}
	
	.towPoint_title {
		float: left;
		width: 20%;
		height: 150px;
		border-radius: 10px;
		text-align: center;
		line-height: 150px;
		font-size: 20px;
		background: #e83632;
		color: #ffffff;
		font-weight: bold;
		margin: 10px 0;
		span {
			margin: 0 10px;
		}
	}
	
	.towPoint_swiper {
		float: left;
		width: 80%;
		overflow: hidden;
		padding: 10px 20px;
		position: relative;
		img{
			cursor: pointer;
			width: 150px;
			height: 150px;
			margin: 0 5px;
			&:hover {
				transform: scale(1.1);
				transition: all 0.5s;
			}
			
		}
		.towPoint_img{
			float: left;
		}
	}
</style>