<template>
	<div class="home">
   		<Home-swipper></Home-swipper>
   		<Home-suggest></Home-suggest>
   		<Home-week :weekList = "weekList"></Home-week>
	</div>
</template>

<script>
import HomeSwipper from './homeSwipper.vue';
import HomeSuggest from './homeSuggest.vue';
import HomeWeek from './homeWeek.vue';
import axios from 'axios'
export default {
  name: 'home',
  components: {
  	'Home-swipper': HomeSwipper,
  	'Home-suggest': HomeSuggest,
  	'Home-week': HomeWeek
  },
  data() {
    return{
      weekList:[]
    }
  },
  mounted() {
    this.getHomeData();

  },
  methods:{
    getHomeData(){
        axios.get('/static/index.json?city=北京')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataError.bind(this))
    },
    handleGetDataSucc(response){
      console.log(response)
        const res = response.data;
        const data = res.data;
        this.weekList = data.weekList;
    },
    handleGetDataError(err){
               console.log(111)
    }
  }
}
</script>

<style scoped>
  .home{
    background-color: #f5f5f5
  }
</style>
