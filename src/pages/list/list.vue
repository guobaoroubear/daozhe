<template>
	<div class="list">
   		<Home-swipper></Home-swipper>
   		<List-content :famousList = "famousList"></List-content>
		  <List-paging></List-paging>
	</div>
</template>

<script>
import HomeSwipper from './components/ticket-list-header'
import ListContent from './components/ticket-list-content'
import ListPaging from './components/ticket-list-paging'
import axios from 'axios';
export default {
  name: 'list',
  data (){
    return {
      famousList: [],
      iconSwiperInfo : []
    }
  },
  components: {
  	'Home-swipper': HomeSwipper,
  	'List-content': ListContent,
  	'List-paging' : ListPaging,
  },
  mounted (){
    this.getListData()
  },
  methods: {
    getListData (){
      axios.get('/static/list.json?city=北京')
      .then(this.handleGetDataSucc.bind(this))
      .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res){
      const r = res.data
      const data = r.data
      this.famousList = data.famousList
      this.iconSwiperInfo = data.iconSwiperInfo
    },
    handleGetDataErr (){
      alert("获取路径失败")
    }
  }
}
</script>

<style>
  .list{
  	height:100%;
    background: #f5f5f5;
  }
</style>
