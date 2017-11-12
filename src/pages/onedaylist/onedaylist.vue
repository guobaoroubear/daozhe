<template>
	<div class="onedaylist">
		<oneday-header></oneday-header>
		<oneday-navX :oneDayListNav ="oneDayListNav" ></oneday-navX>
		<!-- <oneday-navY :oneDayListNav ="oneDayListNav" ></oneday-navY>
 -->
	</div>
</template>
<script>
import axios from "axios";
import onedayheader from './components/onedayheader'
import onedaynavX from './components/onedaynavX'
import onedaynavY from './components/onedaynavY'
import {mapState,mapActions} from "vuex"

export default{
	name: "onedaylist" ,
	components: {
		"oneday-header" : onedayheader,
		"oneday-navX": onedaynavX,
		"oneday-navY": onedaynavY
	},
	computed: mapState({
		oneDayListNav: (state) => {
			return state.onedaylist.oneDayListNav
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
