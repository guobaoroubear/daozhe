<template>
	<div class="detail-baseinfo">
		<div class="detail-baseinfo-address">
			<router-link to="/detail/scenicmap" class="detail-baseinfo-address-link">
				<p class="detail-baseinfo-address-txt">
					<span class="detail-baseinfo-address-icon iconfont">&#xe626;</span>
					北京市东城区景山前街4号
					<span class="detail-baseinfo-address-arrow iconfont">&#xe62e;</span>
				</p>
			</router-link>
		</div>
		<router-link to="/detail/scenicintroduction" class="detail-baseinfo-intro">
			<p class="detail-baseinfo-intro-txt">
				<span class="detail-baseinfo-intro-icon iconfont">&#xe605;</span>
				查看景点简介及开放时间
				<span class="detail-baseinfo-intro-arrow iconfont">&#xe62e;</span>
			</p>
		</router-link>	
	</div>
</template>
<script>
export default {
	name: 'list'
}
</script>
<style scoped>
.detail-baseinfo{
	position: relative;
	top: -.1rem;
	padding: .1rem .2rem 0 .2rem;
	margin-bottom: .1rem;
	background: #fff;
	border-radius: .1rem .1rem 0 0;
}
.detail-baseinfo-address, .detail-baseinfo-intro{
	position: relative;
	display: block;
	height: .88rem;
	color: #212121;
	line-height: .88rem;
}
.detail-baseinfo-address-link{
	color: #212121;
}
.detail-baseinfo-address-txt, .detail-baseinfo-intro-txt{
	overflow: hidden;
	padding-right: .56rem;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.detail-baseinfo-address-icon, .detail-baseinfo-intro-icon{
	margin-right: .2rem;
	color:#9e9e9e;
}
.detail-baseinfo-address-arrow, .detail-baseinfo-intro-arrow{
	position:absolute;
	right: 0;
	color: #b9b9b9;
}
.detail-baseinfo-intro{
	border-top: 1px solid #f0f0ef;
}
</style>
