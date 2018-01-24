<template>
	<!--<div class="towPoint_swiper">
		<div class="towPoint_swiperwrap" ref="swiperwidth">
			<div class="towPoint_img" v-for="(towPointitem,index) in listdata">
				<img :src="towPointitem.imageUrl" />
			</div>
		</div>
		<div class="towPoint_prev" v-show="towPointpage>1">
			<Icon type="chevron-left"></Icon>
		</div>
		<div class="towPoint_next" v-show="towPointindex>6">
			<Icon type="chevron-right"></Icon>
		</div>
	</div>-->
</template>

<script>
	export default{
		props:{
			listdata{
				type:Array,
				default:null
			}
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.towPoint_swiper{
		width: 1000%;
	}
</style>