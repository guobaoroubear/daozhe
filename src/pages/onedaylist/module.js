import axios from "axios";
export default {
	state: {
		oneDayListNav: [],
		onedaycontent: []
	},
	mutations: {
		setState(state,payload){
			state.oneDayListNav = payload.oneDayListNav,
			state.onedaycontent = payload.onedaycontent
		}
	},
	actions: {
		ajaxGetData(context){
			axios.get('/static/onedaylist.json?city=北京')
				.then((res) => {
					context.commit("setState",res.data.data)
				})
		}
	}
}

