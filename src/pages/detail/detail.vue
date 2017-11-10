<template>
	<div class="forbiddenCity-detail">
		<detail-headfigure></detail-headfigure>
		<detail-baseinfo></detail-baseinfo>
		<detail-comment></detail-comment>
		<detail-inform></detail-inform>
		<detail-recommend></detail-recommend>
		<detail-ticket></detail-ticket>
	</div>
</template>

<script>
import detailHeadfigure from './components/detailHeadfigure'
import detailBaseInfo from './components/detailBaseInfo'
import detailcomment from './components/detailcomment'
import detailinform from './components/detailinform'
import detailrecommend from './components/detailrecommend'
import detailticket from './components/detailticket'

export default {
	name: "detail",
	components: {
		"detail-headfigure": detailHeadfigure ,
		"detail-baseinfo": detailBaseInfo,
		"detail-comment": detailcomment,
		"detail-inform" : detailinform,
		"detail-recommend": detailrecommend,
		"detail-ticket": detailticket

	}
}
</script>

<style scoped>
.forbiddenCity-detail{
	background: #f5f5f5;
}
</style>