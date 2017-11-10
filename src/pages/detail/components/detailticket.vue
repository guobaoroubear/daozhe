<template>
	<div class="detailticket">
		<h3 class="detailticket-title">
			<span class="detailticket-ticket-type iconfont">
			&#xe628;</span>
			故宫成人票
		</h3>
		<div class="detailticket-am">
			<div class="detailticket-am-show">
				<h5 class="detailticket-am-type detailticket-ellipsis">
					上午场
					<span class="detailticket-am-subname">凭身份证入园</span>
				</h5>
				<div class="detailticket-am-price">
					&yen
					<em class="detailticket-am-price-num">40</em>
					<span class="detailticket-am-price-numword" >起</span>
				</div>
				<div class="detailticket-am-iconarrow iconfont" @click="handleClick">&#xe630;</div>
			</div>
			<div class="detailticket-am-default" v-if="show">
				隐藏部分去哪直销 爱上旅游网1111111
			</div>
		</div>


		<div class="detailticket-pm">
			<div class="detailticket-pm-show">
				<h5 class="detailticket-pm-type detailticket-ellipsis">
					下午场
					<span class="detailticket-pm-subname">凭身份证入园</span>
				</h5>
				<div class="detailticket-pm-price">
					&yen
					<em class="detailticket-pm-price-num">40</em>
					<span class="detailticket-pm-price-numword">起</span>
				</div>
				<div class="detailticket-pm-iconarrow iconfont" v-on:click="handlePmshow">&#xe630;</div>
			</div>
			 <div class="detailticket-pm-default" v-if="show1">
			 	隐藏部分去哪直销 爱上旅游网22222222
			 </div>
		</div>

		<div class="detailticket-rest" v-if="show2">
			<div class="detailticket-pm-show">
				<h5 class="detailticket-pm-type detailticket-ellipsis">
					故宫+珍宝馆+钟表馆
					<span class="detailticket-pm-subname">凭身份证入园</span>
				</h5>
				<div class="detailticket-pm-price">
					&yen
					<em class="detailticket-pm-price-num">60</em>
					<span class="detailticket-pm-price-numword">起</span>
				</div>
				<div class="detailticket-pm-iconarrow iconfont">&#xe630;</div>
			</div>
		</div>

		<div class="detailticket-refresh" v-on:click="showRest">
			查看剩余产品
			<span class="detailticket-iconfont iconfont">&#xe630;</span>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				show: false,
				show1: false,
				show2 : false
			}
		},
		methods: {
			handleClick(){
				this.show = !this.show;	
			},
			handlePmshow(){
				this.show1 = !this.show1;
			},
			showRest(){
				this.show2 = !this.show2;	
			}
		}
		// mounted(){
			
		// },

	}
	

</script>
<style scoped>
.detailticket{
	position: relative;
	margin-top: .2rem;
	background: #fff;
}
.detailticket-title{
	position: relative;
	overflow: hidden;
	z-index: 4;
	margin-bottom: -.2rem;
	padding: 0 .2rem;
	height: .88rem;
	line-height: .88rem;
	background: #fff;
	color: #333;
	font-size: .32rem;
	text-indent: .2rem;
	border-bottom: 1px solid #dadada;
}
.detailticket-ticket-type{
	color: #00bcd4;
}
.detailticket-am{
	position:relative;
	z-index: 2;
	/*margin-bottom: -.2rem;*/
	padding: .24rem .2rem;
	background: #fff;
	border-bottom: 1px solid #dadada;
}
.detailticket-pm{
	position:relative;
	z-index: 2;
	margin-bottom: -.2rem;
	padding: .24rem .2rem;
	background: #fff;
	border-bottom: 1px solid #dadada;
}
.detailticket-am-show, .detailticket-pm-show{
	position:relative;
	z-index: 2;
	margin-bottom: -.2rem;
	padding: .24rem .2rem;
	background: #fff;
	
}
.detailticket-am-type,.detailticket-pm-type{
	margin-right: 1.8rem;
	color:#333;
	font-size: .3rem;
	line-height: .48rem;
}
.detailticket-ellipsis{
	overflow:hidden;
	text-overflow: ellipsis;
}
.detailticket-am-subname, .detailticket-pm-subname{
	font-size: .24rem;
	color: #888;
	line-height: .32rem;
	margin: .1rem 1.84rem .14rem .1rem;
}
.detailticket-am-price,.detailticket-pm-price{
	right: .46rem;
	margin-top: -.28rem;
	color: #ff9800;
	font-zise: .24rem;
	overflow: hidden;
	position: absolute;
	top: 50%;
	height: .4rem;
	line-height: .4rem;
}
.detailticket-am-price-num, .detailticket-pm-price-num{
	margin-left: .04rem;
	font-size: .36rem;
	font: .28rem Tahoma;
	color: #ff9800;
}
.detailticket-am-price-numword, .detailticket-pm-price-numword{
	display: inline-block;
	color: #9e9e9e;
	font-size: .24rem;
	transition: scale(.8)
}
.detailticket-am-iconarrow, .detailticket-pm-iconarrow{
	right: .2rem;
	margin-top: -.22rem;
	color: #bbb;
	font-size: .24rem;
	overflow: hidden;
	position: absolute;
	top: 50%;
	height: .4rem;
	line-height: .4rem;
}
.detailticket-refresh{
	border-top: 1px solid #dadada;
	position: relative;
	margin-top: -.2rem;
	height: .8rem;
	background: #fff;
	color: #616161;
	line-height: .8rem;
	text-align: center;
	z-index: 2;
}
.detailticket-iconfont{	
	margin-left: .1rem;
	color: #616161;
	font-size: .2rem;	
}
.detailticket-am-default, .detailticket-pm-default{
	width: 100%;
	height: 1rem;
	background: #f5f5f5;
	color: #000;
	font-size: .24rem;
	line-height: 1rem;
}
</style>