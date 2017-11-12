<template>
	<div class="onedaylist">
		<oneday-header></oneday-header>
		<oneday-navX :oneDayListNav ="oneDayListNav" ></oneday-navX>
		<!-- <oneday-navY :oneDayListNav ="oneDayListNav" ></oneday-navY>
 -->
    <onedaylist-content :onedaycontent = "onedaycontent"></onedaylist-content>
	</div>
</template>
<script>
import axios from "axios";
import onedayheader from './components/onedayheader'
import onedaynavX from './components/onedaynavX'
import onedaynavY from './components/onedaynavY'
import onedaylistcontent from './components/onedaycontent'
import {mapState,mapActions} from "vuex"

export default{
	name: "onedaylist" ,
	components: {
		"oneday-header" : onedayheader,
		"oneday-navX": onedaynavX,
		"oneday-navY": onedaynavY,
    "onedaylist-content": onedaylistcontent
	},
	computed: mapState({
		oneDayListNav: (state) => {
			return state.onedaylist.oneDayListNav
		},
    onedaycontent: (state) => {
      return state.onedaylist.onedaycontent
    }
	}),
	methods: mapActions({
		getOneDayListData: (dispatch) => {
			dispatch("ajaxGetData")
		}

	}),
	mounted(){
		!this.oneDayListNav.length && this.getOneDayListData()
	}
}
</script>

<style scoped>
  
</style>
