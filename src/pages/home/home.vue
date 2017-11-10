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
import {mapState, mapActions} from "vuex";
import {AJAX_GET_DATA} from "./types.js"
export default {
  name: 'home',
  components: {
  	'Home-swipper': HomeSwipper,
  	'Home-suggest': HomeSuggest,
  	'Home-week': HomeWeek
  },
  computed: mapState({
      bannerSwiperInfo: (state) => {
        return state.home.bannerSwiperInfo
      },
      iconSwiperInfo: (state) => {
        return state.home.iconSwiperInfo
      },
      suggestList: (state) => {
        return state.home.suggestList
      },
      weekList: (state) => {
        return state.home.weekList
      }
  }),
  mounted (){
    !this.bannerSwiperInfo.length &&  this.getHomeData() 
  },
  methods: mapActions({
    getHomeData : (dispatch) => {
      dispatch(AJAX_GET_DATA)
    }
  })
}

</script>

<style scoped>
  .home{
    background-color: #f5f5f5
  }
</style>
