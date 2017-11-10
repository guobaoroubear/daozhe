<template>
	<div class = "weekendlist">
   	<HotSpring-header></HotSpring-header>
		<HotSpring-product :hotSpring = "hotSpring"></HotSpring-product>
	</div>
</template>

<script>
import HotSpringHeader from './components/hotSpring-header'
import HotSpringProduct from './components/hotSpring-product'
import axios from 'axios';
export default {
  name: 'weekendlist',
  data (){
    return {
    	hotSpring: []
    }
  },
  components: {
  	'HotSpring-header': HotSpringHeader,
  	'HotSpring-product' : HotSpringProduct,
  },
  mounted (){
    this.getWeekendlistData()
  },
  methods: {
    getWeekendlistData (){
      axios.get('/static/weekendlist.json?city=北京')
      .then(this.handleGetDataSucc.bind(this))
      .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res){
      const r = res.data
      const data = r.data
      this.hotSpring = data.hotSpring
    },
    handleGetDataErr (){
      alert("获取路径失败")
    }
  }
}
</script>

<style>
	
</style>