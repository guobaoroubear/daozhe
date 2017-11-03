<template>
	<div class="home">
   		<Home-swipper></Home-swipper>
   		<Home-suggest></Home-suggest>
   		<Home-week></Home-week>
	</div>
</template>

<script>
import HomeSwipper from './homeSwipper.vue';
import HomeSuggest from './homeSuggest.vue';
import HomeWeek from './homeWeek.vue';
export default {
  name: 'home',
  components: {
  	'Home-swipper': HomeSwipper,
  	'Home-suggest': HomeSuggest,
  	'Home-week': HomeWeek
  }
}
</script>

<style scoped>
  .home{
    background-color: #f5f5f5
  }
</style>
