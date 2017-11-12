<template>
	<div>
		<div class="detail-headerfigure">
			<div class="detail-header">
				<router-link to="/" class="detail-header-left iconfont">&#xe63f;</router-link>
				<h1 class="detail-header-title">故宫</h1>
			</div>
			<div class="detail-headerfigure-wrap">
				<router-link to="/detail/detailswiper">
					<img class="detail-headerfigure-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"/>
				</router-link>
			</div>
			<div class="detail-headerfigure-info">
				<div class="detail-headerfigure-title">
					故宫(AAAAA景区)
				</div>
				<div class="detail-headerfigure-icon">
					<span class="detail-imgicon icon iconfont">&#xe605;</span>
					<em class="detail-imgicon-number">10</em>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>

export default {
	name: 'list'	
}
</script>

<style scoped>
.detail-header{
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	display: block;
	height: .88rem;
	background: #00bcd4;
	z-index: 91;
}
.detail-header-left{
	position: absolute;
	left: 0;
	top: 0;
	width: .8rem;
	height: .88rem;
	line-height: .88rem;
	font-size: .36rem;
	color: #fff;
	text-align: center;
}
.detail-header-title{
	overflow: hidden;
	margin:0 .1rem;
	line-height: .88rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: .32rem;
	text-align: center;
	color: #fff;
}
.detail-headerfigure {
	position: relative;
}
.detail-headerfigure-wrap{
	overflow: hidden;
	height: 0;
	width: 100%;
	padding-bottom: 55%;
}
.detail-headerfigure-img{
	width: 100%;
	vertical-align: top;
}
.detail-headerfigure-info{
	position: absolute;
	right: .2rem;
	bottom: .26rem;
	left: .2rem;
	min-height: .4rem;
}
.detail-headerfigure-title{
	position: relative;
	z-index: 1;
	margin-right: 1.4rem;
	line-height: .4rem;
	color: #fff;
	font-size: .32rem;
	text-shadow: 0 1px 2px rgba(0,0,0,0.70);
}
.detail-headerfigure-icon{
	position: absolute;
	right: 0;
	top: 0;
	width: 1.2rem;
	height: .4rem;
	line-height: .4rem;
	background: rgba(0,0,0,.5);
	border-radius: .2rem;
	font-size: .24rem;
	color: #fff;
	line-height: .4rem;
	text-align: center;
}
.detail-imgicon{
	position: relative;
	top: .02rem;
}
.detail-imgicon-number{
	margin-left: .1rem;
}

</style>
