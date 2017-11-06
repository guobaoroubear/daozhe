<template>
	<div class="home">
   		<Home-swipper :bannerSwiperInfo="bannerSwiperInfo" :iconSwiperInfo="iconSwiperInfo"></Home-swipper>
   		<Home-suggest></Home-suggest>
   		<Home-week></Home-week>
	</div>
</template>

<script>
import HomeSwipper from './homeSwipper.vue';
import HomeSuggest from './homeSuggest.vue';
import HomeWeek from './homeWeek.vue';
import axios from 'axios';
export default {
  name: 'home',
  components: {
  	'Home-swipper': HomeSwipper,
  	'Home-suggest': HomeSuggest,
  	'Home-week': HomeWeek
  },
  data(){
    return {
      bannerSwiperInfo : [] ,
      iconSwiperInfo : []
    }
  },
  mounted (){
    this.getHomeData()
  },
  methods: {
    getHomeData (){
      axios.get('/static/home.json?city=北京')
      .then(this.handleGetDataSucc.bind(this))
      .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res){
      console.log(res)
      const data = res.data.data;
      this.bannerSwiperInfo = data.bannerSwiperInfo
      this.iconSwiperInfo = data.iconSwiperInfo
    },
    handleGetDataErr (){
      alert("获取路径失败")
    }
  }


}
</script>

<style scoped>
  .home{
    background-color: #f5f5f5
  }
</style>
