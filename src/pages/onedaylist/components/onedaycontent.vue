<template>
	<div class="onedaylist-content">
		<ul class="mp-list">
			<li v-for="item in onedaycontent" class="mp-list-item">
				<router-link class="mp-list-link" to="/">
					<div class="mp-list-imgcon">
						<img :src="item.src" alt="" class="mp-list-img">
						<span class="mp-list-bookingflag">
							<span class="mp-list-bookingtext">可订明日</span>
						</span>
					</div>
					<div class="mp-list-product">
						<h4 class="mp-list-productname">{{item.title}}</h4>
						<div class="mp-list-taglist">
							<span class="mp-list-tagitemlight">{{item.tagLeft}}</span>
							<span class="mp-list-tagitem">{{item.tagCenter}}</span>
							<span class="mp-list-tagitem">{{item.tagRight}}</span>
						</div>
						<div class="mp-list-cashback"></div>
						<div class="mp-list-priceinfo">
							<span class="mp-list-qunarprice">
								&yen;<em class="mp-list-qunarprice-em">{{item.price}}</em>
							</span><span class="mp-list-priceflag">起</span>
						</div>
						<div class="mp-list-moreinfo">
							<span class="mp-list-text">{{item.sold}}</span>
						</div>
					</div>
				</router-link>
			</li>
		</ul>
		<!-- 分页 -->
		<div mp-role="moreInfoCon" class="mp-moreinfo">
        	<div mp-role="pageCon">
	        	<div class="mp-pagination">
		        	<a href="javascript:void(0);" mp-role="prevPage" class="mp-disable-btn">
		        		上一页
		        	</a>
		        	<span class="mp-page-num" mp-role="pageNum">1</span>
		        	<a href="/touch/list_北京_景点门票_2.html?region=北京&amp;keyword=景点门票&amp;pageSize=20" mp-role="nextPage" class="mp-disable-btn">
		        		下一页
		        	</a>
	        	</div>
	        	<div class="mp-page-text">去哪儿门票</div>
        	</div>
        </div>
	</div>
</template>
<script>
export default {
	 props: ['onedaycontent']
}	
</script>
<style scoped>
.mp-list {
	background: #fff;
}
.pm-list-item{
	position:relative;
	display: flex;
	width:100%;
}
.mp-list-link{
color: #616161;
}
.mp-list-imgcon {
	float: left;
	margin: .2rem;
	position: relative;
	width: 1.6rem;
	height: 1.6rem;
}
.mp-list-imgcon img {
	position: relative;
	width: 1.6rem;
	height: 1.6rem;
}
.mp-list-bookingflag {
    position: absolute;
    left: -.04rem;
    top: -.04rem;
    height: .24rem;
    padding: .02rem;
    background: #00bcd4;
    color: #fff;
    line-height: .24rem;
}
.mp-list-bookingtext {
	display: block;
	font-size: .24rem;
}
.mp-list-product{
	padding: .2rem .2rem .2rem 0;
    height: 1.6rem;
    overflow: hidden;
    position: relative;
    background-bottom:1px solid #c9cccd;
}
.mp-list-productname {
    line-height: .36rem;
    font-size: .3rem;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mp-list-taglist {
    position: relative;
    top: .06rem;
    overflow: hidden;
    max-height: .58rem;
    margin-right: 1rem;
    padding-top: .06rem;
    line-height: .24rem;
    font-size: 0;
}
.mp-list-tagitemlight {
    display: inline;
    padding: 0 .1rem;
    font-size: .24rem;
    color: #00bcd4;
}
.mp-list-tagitem {
    display: inline;
    padding: 0 .1rem;
    font-size: .24rem;
    color: #616161;
}
.mp-list-cashback {
    position: absolute;
    right: .2rem;
    top: .9rem;
    color: #ff1200;
    font-size: 0;
}
.mp-list-priceinfo {
    position: absolute;
    right: .2rem;
    bottom: .48rem;
    height: .32rem;
    line-height: .32rem;
    color: #9e9e9e;
    text-align: right;
}
.mp-list-moreinfo {
    position: absolute;
    left: -.1rem;
    bottom: .2rem;
    width: 100%;
    font-size: 0;
    color: #9e9e9e;
}
.mp-list-qunarprice {
    font-size: .22rem;
    font-weight: bold;
    color: #ff8300;
}
.mp-list-qunarprice-em {
    font-size: .32rem;
    padding-left: .04rem;
}
.mp-list-priceflag {
    font-size: .24rem;
    padding-left: .02rem;
}
.mp-list-text {
    padding: 0 .1rem;
    font-size: .22rem;
}
/*分页*/
.mp-moreinfo {
    margin: .2rem 0;
    color: #00afc7;
    line-height: .82rem;
    text-align: center;
}
.mp-pagination {
    height: .7rem;
    line-height: .7rem;
}
.mp-page-text {
    padding-top: .2rem;
    line-height: .3rem;
    font-size: .3rem;
}
.mp-pagination a .mp-disable-btn {
    background: #bdbdbd;
    color: #fff;
    border: 0;   
}
.mp-pagination .mp-page-num {
    color: #212121;
    line-height: .6rem;
    padding: 0 15px;
}
.mp-pagination a, .mp-pagination a:link, .mp-pagination a:visited, .mp-pagination a:hover, .mp-pagination a:active {
    display: inline-block;
    width: 1.4rem;
    border: .02rem solid #00afc7;
    background: #fff;
    color: #00afc7;
    line-height: .6rem;
    border-radius: .06rem;
}
</style>
