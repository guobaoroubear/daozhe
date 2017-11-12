<template>
	<div class="scenicintroduction">
		<div class="scenicintroduction-header">
			<router-link to="/detail" class="iconfont scenicintroduction-header-return">&#xe63f;</router-link>
			<h1 class="scenicintroduction-header-title">详情介绍</h1>
		</div>
		<div>入圆时间</div>
	</div>
</template>
<script>
	export default {

	}
</script>
<style scope>
.scenicintroduction-header{
	position: relative;
	height: .88rem;
	background: #00bcd4;
	z-index: 91;
}
.scenicintroduction-header-return{
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
.scenicintroduction-header-title{
	overflow: hidden;
	margin: 0 1rem;
	line-height: .88rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: .32rem;
	text-align: center;
	color: #fff;
}
</style>