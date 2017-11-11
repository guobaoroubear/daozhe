<template>
	<div class="onedaylist">
   	<onedaylist-header></onedaylist-header>
		<onedaylist-content :onedaycontent = "onedaycontent"></onedaylist-content>
	</div>
</template>

<script>
import onedaylistheader from './components/onedayheader'
import onedaylistcontent from './components/onedaycontent'
import axios from 'axios';
export default {
  name: 'onedaylist',
  data (){
    return {
      onedaycontent: []
    }
  },
  components: {
  	'onedaylist-header': onedaylistheader,
  	'onedaylist-content': onedaylistcontent
  },
  mounted (){
    this.getonedaylistData()
  },
  methods: {
    getonedaylistData (){
      axios.get('/static/onedaylist.json?city=北京')
      .then(this.handleGetDataSucc.bind(this))
      .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res){
      const r = res.data
      const data = r.data
      this.onedaycontent = data.onedaycontent
    },
    handleGetDataErr (){
      alert("获取路径失败")
    }
  }
}
</script>

<style scoped>
  
</style>
