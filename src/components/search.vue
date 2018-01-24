<template>
	<div class="search">
		<Input v-model="value4" icon="ios-clock-outline" placeholder="Enter something..." style="width: 50%"></Input>
		<Button type="primary"  icon="ios-search">Search</Button>
	</div>
</template>

<script>
  export default {
  	data(){
  		return {
  			value4:""
  		}
  	}
}	
</script>

<style scoped lang="scss">	
	$search-height: 80px;
	.search{
		width: 50%;
		margin: 0 auto;
		text-align: center;
		height: $search-height;
		line-height: $search-height;
	}
</style>