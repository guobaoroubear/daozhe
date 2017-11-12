<template>
	<div class="onedaynav">
		<div class="outer">
			<div class="nav-container">				

				<div class="nav-wrapper" id="wrapperX">
					<div class="nav-content" id="scrollX" >
						<ul class="nav-content-innerX">
							<li class="nav-content-inner-text" v-for="item in oneDayListNav" :key="item.id" style="display:inline;">
								<router-link :to="item.link" class="nav-content-inner-link">{{item.txt}}</router-link>
							</li>				
						</ul>
					</div>
				</div>
	
				<div class="nav-border-left nav-right">
					<span class="nav-iconfont-arrow iconfont">&#xe630;</span>
				</div>
			</div>
			
		</div>
	</div>
	
</template>
<script>
import Iscroll from '../../../utils/iscroll-probe.js';
export default {
	name: "onedaynav",
	props: ["oneDayListNav"],
	methods: {
	},
	mounted() {

		 this.myScroll = new IScroll('#wrapperX',{scrollX: true,scrollY: false, mouseWheel: true
		 })
	},
	updated: function() {
		 this.myScroll.refresh()
	}
}

</script>
<style scoped>
.outer{
	height: .8rem;
}
.nav-container{
	height: .8rem;
	position: relative;
	z-index: 2;
	background: #e5e7e8;
	border-bottom: 1px solid #bfc6ca;
}
.nav-wrapper{
	margin-right: .8rem;
	height: .8rem;
	overflow: hidden;
	
}
.nav-content{
	float: left;
}
	
.nav-content-innerX{
	height: 5rem;
	width: 36rem;
	font-size: 0;	
	white-space: nowrap;
	overflow-x: auto;
	overflow: hidden;
}
.nav-content-inner-text{
	display: inline-block;
	float: left;
	margin: .04rem .08rem;
	padding: .08rem 0;
}
.nav-content-inner-link{
	display: block;
	float: left;
	min-width: .26rem;
	padding: 0 .22rem;
	background: #fff;
	color: #212121;
	font-size: .26rem;
	line-height: .56rem;
	border-radius: .04rem;
}
.nav-border-left{
	position: absolute;
	z-index: 3;
	top: 0;
	right: 0;
	width: .8rem;
	height: .78rem;
	line-height: .78rem;
	border-left: 1px solid #d7dbde;
}
.nav-iconfont-arrow{
	display: block;
	color: #aab2b7;
	font-size: .28rem;
	text-align: center;
}
</style>