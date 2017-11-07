import axios from 'axios'
export default {
	state: {
		iconSwiperInfo: [],
		suggestList: [],
      	weekList: [],
      	bannerSwiperInfo : []
	},
	mutations: {
		setdata(state,payload){
			state.iconSwiperInfo = payload.iconSwiperInfo;
			state.suggestList = payload.suggestList;
			state.weekList = payload.weekList;
			state.bannerSwiperInfo = payload.bannerSwiperInfo;
		}
	},
	actions: {
		getHomeData (context){
      	axios.get('/static/home.json?city=北京')
      	.then((res) => {
		    const r = res.data
		    const data = r.data
		    /*this.suggestList = data.suggestList
		    this.weekList = data.weekList
		    this.bannerSwiperInfo = data.bannerSwiperInfo*/
		    context.commit('setdata', data)
      })
    	}
	},
	getters: {  }
}