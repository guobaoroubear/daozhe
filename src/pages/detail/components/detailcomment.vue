<template>
	<div class="detailcomment">
		<span class="detailcomment-icon iconfont">&#xe601;</span>
		<span class="detailcomment-startlevel">
			<i class="detailcomment-startlevel-icon iconfont">&#xe657;&#xe657;&#xe657;&#xe657;&#xe657;</i>
		</span>
		<span class="detailcomment-tagscore">5.0分</span>
		<router-link class="detailcomment-total" to="">
			<span class="detailcomment-totalnum">
				155626评论
				<i class="detailcomment-rightarrow iconfont">&#xe62e;</i>
			</span>
		</router-link>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
.detailcomment{
	margin-bottom: .2rem;
	height: .8rem;
	line-height: .8rem;
	background: #fff;
}
.detailcomment-icon{
	position:relative;
	display: inline-block;
	width: .36rem;
	height: .36rem;
	margin: 0 .1rem 0 .2rem;
	color: #00bcd4;
}
.detailcomment-startlevel{
	position:relative;
	display: inline-block;
	width: 1.6rem;
	height: .28rem;
}
.detailcomment-startlevel-icon{
	width: 100%;
	z-index: 2;
	overflow: hidden;
	color: #00bcd4;
}
.detailcomment-tagscore{
	display: inline-block;
	margin-left: .1rem;
	color: #00bcd4;
	line-height: .8rem;
}
.detailcomment-total{
	display: block;
	float: right;
	color: #00afc7;
}
.detailcomment-totalnum{
	display: inline-block;
	line-height: .28rem;
	margin-left: .16rem;
	margin-right: .2rem;
	color: #9e9e9e;
}

</style>