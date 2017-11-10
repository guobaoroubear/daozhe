<template>
	<div class="onedaylist">
		<onedaylist-header></onedaylist-header>
	</div>
</template>
<script>
	import onedaylistheader from './components/onedayheader'
export default{
	name: "onedaylist" ,
	components: {
		"onedaylist-header" : onedaylistheader

	}
}
</script>
<style scoped>
	
</style>
