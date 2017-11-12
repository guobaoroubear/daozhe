<template>
	<div class="detailinform">
		<div class="detailinform-con">
			<div class="detailinform-inner">
				<span class="detailinform-inner-icon iconfont">&#xe600;</span>
				因重要活动需要，故宫博物院11月8日（周三）临时闭馆一天，11月9日（周四）正常开放。敬请谅解。
				<span class="detailinform-inner-arrowicon iconfont">&#xe62e;</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style scoped>
.detailinform-con{
	margin-bottom: .2rem;
	height: .88rem;
	line-height: .88rem;
	padding-left: .23rem;
	background: #fdeede;
	color: #f1441a;
}
.detailinform-inner{
	padding-right: .6rem;
	overflow: hidden;
	position: relative;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.detailinform-inner-icon{
	color: #f67353;
	margin-right: .1rem;
}
.detailinform-inner-arrowicon{
	right: .2rem;
	position: absolute;
	color: #c7bcaf;
}

</style>