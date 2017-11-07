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
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    'Home-swipper': HomeSwipper,
    'Home-suggest': HomeSuggest,
    'Home-week': HomeWeek
  },
  data (){
    return {
      suggestList: [],
      weekList: [],
      bannerSwiperInfo : []
    }
  },
  computed: mapState({
    iconSwiperInfo: (state) => {
      return state.home.iconSwiperInfo
    }
  }),
  mounted (){
    this.getHomeData()
  },
  methods: {
    getHomeData() {
      this.$store.dispatch("getHomeData")
    }
  }
}
</script>

<style scoped>
  .home{
    background-color: #f5f5f5
  }
</style>
