<template>
	<div class="home">
   		<Home-swipper :bannerSwiperInfo="bannerSwiperInfo" :iconSwiperInfo="iconSwiperInfo"></Home-swipper>
   		<Home-suggest :suggestList = "suggestList"></Home-suggest>
   		<Home-week :weekList = "weekList"></Home-week>

	</div>
</template>

<script>
import HomeSwipper from './components/homeSwipper'
import HomeSuggest from './components/homeSuggest'
import HomeWeek from './components/homeWeek'
import axios from 'axios';
export default {
  name: 'home',
  data (){
    return {
      suggestList: [],
      weekList: [],
      bannerSwiperInfo : [] ,
      iconSwiperInfo : []
    }
  },
  components: {
  	'Home-swipper': HomeSwipper,
  	'Home-suggest': HomeSuggest,
  	'Home-week': HomeWeek
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
      const r = res.data
      const data = r.data
      this.suggestList = data.suggestList
      this.weekList = data.weekList
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
