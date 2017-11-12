import axios from "axios";
export default {
	state: {
		oneDayListNav: []
	},
	mutations: {
		setState(state,payload){
			state.oneDayListNav = payload.oneDayListNav

		}
	},
	actions: {
		ajaxGetData(context){
			axios.get('/static/onedaylist.json?city=北京')
				.then((res) => {
					console.log(res.data.data)
					
					context.commit("setState",res.data.data)
				})
		}

	}
	
}

