<template>
	<div class="home">
   		<Home-swipper></Home-swipper>
   		<Home-suggest :suggestList = "suggestList"></Home-suggest>
   		<Home-week :weekList = "weekList"></Home-week>
	</div>
</template>

<script>
import HomeSwipper from './homeSwipper.vue';
import HomeSuggest from './homeSuggest.vue';
import HomeWeek from './homeWeek.vue';
import axios from 'axios';
export default {
  name: 'home',
  data (){
    return {
      suggestList: [],
      weekList: []
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
      const r = res.data;
      const data = r.data;
      this.suggestList = data.suggestList;
      this.weekList = data.weekList;
            console.log(this.weekList);
    },
    handleGetDataErr (err){}
  }
}
</script>

<style scoped>
  .home{
    background-color: #f5f5f5
  }
</style>
