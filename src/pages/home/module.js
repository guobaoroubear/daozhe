import axios from "axios";
import {SET_DATA, AJAX_GET_DATA} from "./types.js"
export default {
  state: {
  	bannerSwiperInfo : [],
  	iconSwiperInfo : [],
  	suggestList : [],
  	weekList : []
  },
  mutations: {
  	[SET_DATA](state, payload){
  		console.log(state)
  		console.log(payload)
  		state.bannerSwiperInfo = payload.bannerSwiperInfo;
  		state.iconSwiperInfo = payload.iconSwiperInfo;
  		state.suggestList = payload.suggestList;
  		state.weekList = payload.weekList;
  	}
  },
  actions: {
  	[AJAX_GET_DATA](context) {
      axios.get('/static/home.json?city=北京')
      .then((res) => {
      	context.commit(SET_DATA, res.data.data);
      	
      })
    }
  }
 
}