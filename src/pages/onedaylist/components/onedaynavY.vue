 <!-- <template>
	<div class="onedaynav">
		<div class="outer">
			<div class="nav-container">
				<h3 class="nav-title">
					游玩景点
					<span class="nav-subtitle">(可多选)</span>
				</h3>
				<div class="nav-border-left nav-right">
					<span class="nav-iconfont-arrow iconfont">&#xe630;</span>
				</div>

				<div class="nav-wrapper" id="wrapperY">
					<div class="nav-content" id="scrollY">
						<ul class="nav-content-innerY">
							<li class="nav-content-inner-text" v-for="item in oneDayListNav" :key="item.id">
								<router-link :to="item.link" class="nav-content-inner-link">{{item.txt}}</router-link>
							</li>
						</ul>
					</div>
				</div>					
			</div>
		</div>
	</div> 
	
</template> -->
<script>
 import Iscroll from '../../../utils/iscroll-probe.js';
//require("../../../utils/iscroll-probe.js");

export default {
	name: "onedaynav",
	props: ["oneDayListNav"],
	methods: {

	},
	mounted() {

		 this.myScroll = new IScroll('#wrapperX',{scrollX: false,scrollY: true, mouseWheel: true
		 })
	},
	updated: function() {
		 this.myScroll.refresh()
	}

}
</script>
<style scoped>
.outer{
	/*height: .8rem;*/
}
.nav-container{
	height: .8rem;
	position: relative;
	z-index: 2;
	background: #e5e7e8;
	border-bottom: 1px solid #bfc6ca;
}
.nav-title{
	display: block;
	position: relative;
	z-index: 3;
	color: #212121;
	font-size: .28rem;
	line-height: .8rem;
	text-indent: .2rem;
	background: #e5e7e8;
}
.nav-subtitle{
	font-size: .24rem;
	padding-left: .1rem;
}
.nav-wrapper{	
	background: #e5e7e8;
	position: absolute;
	top: .8rem;
	left: 0;
	z-index: 1;
	width: 100%;
	overflow: hidden;
}
.nav-content{
	position: absolute;
	z-index: 1;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	width: 100%;
	-webkit-transform: translateZ(0);
	-moz-transform: translateZ(0);
	-ms-transform: translateZ(0);
	-o-transform: translateZ(0);
	transform: translateZ(0);
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-text-size-adjust: none;
	-moz-text-size-adjust: none;
	-ms-text-size-adjust: none;
	-o-text-size-adjust: none;
	text-size-adjust: none;
}
.nav-content-innerY{
	font-size: 0;
}
.nav-content-inner-text{
	/*display: inline-block;*/
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