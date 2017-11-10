<template>
	<div class="detail-recommend">
		<div class="recommend-area">
			<h3 class="recommend-ticket-type">
				<i class="recommend-ticket-type-icon iconfont">&#xe602;</i>
				去哪儿推荐
			</h3>
			<div class="recommend-ticket-item" v-for="item in detailRecommendInfo" key={{item.id}}>
				<div class="recommend-ticket-left">
					<h6 class="recommend-ticket-title">
						{{item.title}}
					</h6>
					<ul class="recommend-ticket-light"></ul>
					<ul class="recommend-ticket-time">
						<span class="tagrecommend-ticket-desc">
							<i class="recommend-ticket-tagicon iconfont">&#xe76f;</i>
							{{item.tip1}}
						</span>
						<span class="tagrecommend-ticket-desc">
							<i class="recommend-ticket-tagicon iconfont">&#xe600;</i>
							{{item.tip2}}
						</span>
					</ul>
				</div>
				<div class="recommend-ticket-right">
					<router-link class="recommend-ticket-link" to="#">
						<strong class="recommend-ticket-price">
							&yen
							<em class="recommend-ticket-price-num">{{item.price}}</em>
						</strong>
						<em class="recommend-ticket-btn" v-on:click="handleclick">{{item.methods}}</em>
					</router-link>
				</div>
			</div>



			<transition-group name="slide-fade">
	        	<div class="dock-content" id="dock-content" v-if="show" v-for="item in detailRecommendInfo" key={{item.id}}>
	        	<div class="dock-content-con">
	        		<div class="dock-top">
	        			<h6 class="reserve-title ellipsis2">{{item.title}}</h6>
	        			<i class="delet icon iconfont" v-on:click="handleClickNone">&#xe63f;</i>
	        		</div>
	        		<h5 class="dock-price"><span class="book-tip">&yen</span>{{item.price}}<span class="dock-num">/张</span></h5>
	        		<h4 class="price-calendar">价格日历</h4>
	        		<div class="calendar-con">
	        			<div class="calendar-con-item color-gray">  
	        				<em class="date">今天</em>
	        				<em class="date">11月7日</em>
	        			</div>
	        			<div class="calendar-con-item color-gray">  
	        				<em class="date">明天</em>
	        				<em class="date">11月8日</em>
	        			</div>
	        			<div class="calendar-con-item " id="checked"> 
	        				<em class="date">后天</em>
	        				<em class="date">11月9日</em>
	        			</div>
	        			<div class="calendar-con-item"> 
	        				<em class="date others">其他日期</em>
	        			</div>
	        		</div>
	        	</div>	 
	        	<div class="mpf-booking-light">需要在游玩前1天的23:59前预订</div>        	
	        	<router-link to="/login"class="book-btn">立即预订</router-link>
	        </div>
   		</transition-group>


		</div>
	</div>
</template>
<script>
	import axios from "axios"
	export default{
		data() {
			return {
				detailRecommendInfo: [],
				show: false

			}
		},
		mounted(){
			this.getDetailData()
		},
		methods: {
			getDetailData(){
				axios.get("./static/detail.json")
					.then((res) => {
						
						const data = res.data.data
						 console.log(data)
						this.detailRecommendInfo = data.detailRecommendInfo

					})
			},
			handleclick(){
				// console.log(e)
				this.show =  true
			},
			handleClickNone(){
				this.show = false
			}
		}

	}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}






.detail-recommend{
	position: relative;
}
.recommend-area{
	position: relative;
	background: #fff;
	margin-bottom: .2rem;
}
.recommend-ticket-type-icon{
	color: #00bcd4;
}
.recommend-ticket-type{
	overflow: hidden;
    position: relative;
    z-index: 4;
    margin-bottom: -.02rem;
    padding: 0 .2rem;
    height: .88rem;
    line-height: .88rem;
    background: #fff;
    color: #333;
    font-size: .32rem;
    border-bottom: 1px solid #dadada;
}
.recommend-ticket-item{
	box-sizing: border-box;
	display: flex;
	width: 100%;
	padding: .2rem .2rem .24rem .2rem;
	border-top: 1px solid #dadada;
	background: #fff;
}
.recommend-ticket-left{
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 75%;
	
}
.recommend-ticket-right{
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: .02rem;
	border-left: 1px solid #dadada;
}
.recommend-ticket-title{
	margin-right: .1rem;
	line-height: .52rem;
	padding: 0;
	font-size: .3rem;
	color: #333;
	overflow: hidden;
	text-overflow: ellipsis;
}
.recommend-ticket-light{
	padding: .04rem 0 .08rem 0;
	overflow: hidden;
}
.recommend-ticket-time{
	padding: .04rem 0 .08rem 0;
	overflow: hidden;
}
.tagrecommend-ticket-desc{
	display:inline-block;
	margin-right: .24rem;
	color: #616161;
	font-size: .24rem;
	line-height: .32rem;
	white-space: nowrap;
}
.recommend-ticket-tagicon{
	display: inline-block;
	margin-right: .08rem;
	color: #1ba9ba;
	font-size: .2rem;
}
.recommend-ticket-link{
	box-sizing: border-box;
	display: block;
	width: 100%;
	padding-left: .2rem;

}
.recommend-ticket-price{
	display: block;
	overflow: hidden;
	line-height: .28rem;
	height: .32rem;
	text-align: center;
	color: #ff9800;

}
.recommend-ticket-price-num{
	color: #ff9800;
	font-size: .28rem;
}
.recommend-ticket-btn{
	display: block;
	overflow: hidden;
	background: #ff9800;
	height: .6rem;
	color: #fff;
	font-size: .28rem;
	line-height: .6rem;
	border-radius: .06rem;
	text-align: center;

}




.dock-content{
	position: fixed;
	bottom: 0;
	padding: 0 .2rem;
	background: #f5f5f5;
	z-index: 9;
}
.dock-top{
	display: flex;
	justify-content: space-between;
}
.reserve-title{	
	font-size: .32rem;
    line-height: .88rem;
}
.delet{	
	font-size: .3rem;
    line-height: .88rem;
}
.dock-price{
	color: #ff9800;
	font-size:.32rem;
	font-weight: 600;
}
.book-tip{
	font-size: .2rem;
	font-weight: 100;
}
.dock-num{
	padding-left: .2rem;
	color: #666;
	font-size:.2rem;
	font-weight: 100;
}
.price-calendar{
	color: #333;
    font-size: .26rem;
    line-height: .65rem;
}
.calendar-con{
	display: flex;
	justify-content: space-around;
	
}
.calendar-con-item{
	width: 22.5%;
	height: .86rem;
	border: 1px solid #ccc;
	border-radius: .1rem;
	text-align:center;
}
.color-gray{
	color: #dedede;
}
.date{
	display: inline-block;	
	line-height: .43rem;
}
.others{
	line-height: .86rem;
}
#checked{
	color: #fff;
	background: #00bcd4;
}
.mpf-booking-light {
    padding: .14rem 0;
    color: #ff8300;
    font-size: .24rem;
    line-height: .36rem;
}
.book-btn{
	display: block;
    width: 100%;
    border: 0 none;
    background: #ff9800;
    color: #fff;
    font: normal .36rem/1rem Arial,"Microsoft Yahei","Helvetica Neue",Helvetica,sans-serif;
    text-align: center;
}
</style>