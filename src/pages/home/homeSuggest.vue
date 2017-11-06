<template>
	<div>
		<ul class="home-location clear">
			<li class="left">
				<a class="nowrap home-location-a home-location-a-border"><i class="iconfont">&#xe626;</i>位于：北京昌平区北京科技职业学院</a>
			</li>
			<li class="right nowrap">
				<a class="nowrap home-location-a"><i class="iconfont">&#xe84e;</i>五折泡温泉</a>
			</li>
		</ul>
		<ul class="home-activity clear">
			<li class="left">
				<a class="home-activity-lefta">
					<p class="home-activity-topp nowrap">精选温泉</p>
					<p class="home-activity-bottomp nowrap">5折开泡</p>
				</a>
			</li>
			<li class="right">
				<a class="home-activity-righta">
					<p class="home-activity-topp nowrap">金秋大促</p>
					<p class="home-activity-bottomp nowrap">门票1元起</p>
				</a>
			</li>
		</ul>
		<h2 class="home-modtitle">热销推荐</h2>
		<ul>
			<li v-for="item in hotList" class="home-hot-list">
				<div class="home-hot-img">
					<img :src="item.img"/>
				</div>
				<div class="home-hot-p">
					<p class="nowrap home-hot-title">{{item.title}}</p>
					<p class="nowrap home-hot-desc">{{item.desc}}</p>
				</div>
				<div class="home-hot-price">￥
					<span class="home-hot-price-num">{{item.price}}</span>
					<span class="home-hot-price-text">起</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data(){
		return {
			hotList: [{
				img: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
				title: '故宫',
				desc: '东方宫殿建筑代表，世界宫殿建筑典范',
				price: '20'
			},{
				img: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_140x140_97813766.jpg',
				title: '八达岭长城',
				desc: '不到长城非好汉',
				price: '25'
			},{
				img: 'http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_140x140_e20be8e0.jpg',
				title: '颐和园',
				desc: '保存完整的一座皇家行宫御苑',
				price: '23.2'
			},{
				img: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_140x140_b05eb1df.jpg',
				title: '北京欢乐谷',
				desc: '七大主题园区带你畅享北京欢乐谷',
				price: '28'
			},{
				img: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b6378fd3b2e1d86a3.img.jpg_140x140_eae81520.jpg',
				title: '慕田峪长城',
				desc: '秀美长城，关键是人少',
				price: '19.1'
			}]
		}
	}
}
</script>

<style scoped>
	.clear:after{
		content: "";
		display: block;
		clear: both;
	}
	.left{
		float: left
	}
	.right{
		float: right
	}
	.nowrap{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.line:after{
		content: "";
		display: block;
		position: absolute;
		top: 0;
		width: 100%;
		height: 0.04rem;
		background: #e0e0e0
	}
	.home-location{
		border-top: 0.02rem solid #e0e0e0;
		font-size: .28rem;
		line-height: .98rem;
		text-align: center;
	}
	.home-location .left{
		width: 50%
	}
	.home-location .right{
		width: 50%
	}
	.home-location-a{
		margin-left: 1px;
		background-color: #fff;
		display:block;
		padding: 0 10%;
		width: 80%;
		color:#212121
	}
	.home-location-a-border{
		box-sizing: border-box;
		border-right: 0.02rem solid #e0e0e0;
		width: 100%
	}
	.home-activity{
		margin-top: .2rem;
		border-bottom: 0.02rem solid #e0e0e0;
		border-top: 0.02rem solid #e0e0e0;
	}
	.home-activity .left{
		width: 50%
	}
	.home-activity .right{
		width: 50%
	}
	.home-activity-lefta{
		display: block;
		box-sizing: border-box;
		padding-right: 5%;
		border-right: 0.02rem solid #e0e0e0;
		width:100%;
		background: #fff url(../../assets/wenquan.png) no-repeat;
		background-size: 1.4rem 1.4rem;
		background-position: top right;
		background-origin: content-box
	}
	.home-activity-righta{
		display: block;
		padding-right: 5%;
		width:95%;
		background: #fff url(../../assets/jinqiu.png) no-repeat;
		background-size: 1.4rem 1.4rem;
		background-position: top right;
		background-origin: content-box
	}
	.home-activity-topp{
		padding: .45rem 0 0 .2rem;
		font-family: '微软雅黑';
		font-size: .28rem;
		color: #fe0000;
	}
	.home-activity-bottomp{
		padding: .2rem 0 .35rem .2rem;
		font-size: .10rem;
		color: #636363;
	}
	.home-modtitle{
		padding-left: .26rem;
		height: .8rem;
		line-height: .8rem;
		color: #212121
	}
	.home-hot-list{
		position: relative;
		height: 1.4rem;
		padding: .24rem;
		border-bottom: 0.02rem solid #e0e0e0;
		background: #fff;
	}
	.home-hot-img{
		position: absolute;
		top: .24rem;
		left: .24rem;
		width: 1.4rem;
		height: 1.4rem
	}
	.home-hot-img img{
		width: 100%
	}
	.home-hot-p{
		margin-left: 1.6rem
	}
	.home-hot-price{
		margin-left: 1.6rem;
		color: #ff8300;
		font-size: .24rem
	}
	.home-hot-title{
		margin-top: .04rem;
		margin-bottom: .1rem;
		color: #212121;
		font-size: .3rem;
	}
	.home-hot-desc{
		margin-bottom: .1rem;
		height: .4rem;
		line-height: .4rem;
		color: #9e9e9e
	}
	.home-hot-price-num{
		font-size: .36rem;
		padding: 0 .04rem;
	}
	.home-hot-price-text{
		color: #9e9e9e;
		font-size: .24rem
	}
</style>
