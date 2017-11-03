<template>
	<div>
		<ul class="home-location clear">
			<li class="left line">
				<a class="nowrap home-location-a">位于：北京昌平区北京科技职业学院</a>
			</li>
			<li class="right nowrap">
				<a class="nowrap home-location-a">五折泡温泉</a>
			</li>
		</ul>
		<ul class="home-activity clear">
			<li class="left">
				<a class="home-activity-lefta">
					<p class="home-activity-topp">精选温泉</p>
					<p class="home-activity-bottomp">5折开泡</p>
				</a>
			</li>
			<li class="right">
				<a class="home-activity-righta">
					<p class="home-activity-topp">金秋大促</p>
					<p class="home-activity-bottomp">门票1元起</p>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  
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
		display:block;
		position:absolute;
		top: 0;
		width: 1px;
		height: 100%;
		background: #f5f5f5
	}
	.home-location{
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
		background-color: #fff;
		display:block;
		padding: 0 10%;
		width: 80%;
		color:#212121
	}
	.home-activity{
		margin-top: .2rem
	}
	.home-activity .left{
		width: 50%
	}
	.home-activity .right{
		width: 50%
	}
	.home-activity-lefta{
		display: block;
		width:100%;
		background: #fff url(../../assets/jingxuan.png) no-repeat;
		background-size: 1.6rem 1.32rem;
		background-position: top right
	}
	.home-activity-righta{
		display: block;
		width:100%;
		background: #fff url(../../assets/cuxiao.png) no-repeat;
		background-size: 1.6rem 1.32rem;
		background-position: top right
	}
	.home-activity-topp{
		padding: .4rem 0 0 .2rem;
		font-size: .28rem;
		font-weight: 900;
		color: #fe0000;
	}
	.home-activity-bottomp{
		padding: .2rem 0 .4rem .2rem;
		font-size: .10rem;
		color: #636363;
	}
</style>
