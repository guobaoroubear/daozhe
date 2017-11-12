<template>
	<div class="list-content">
        <div class="mp-main">
	        <div class="mp-filter">
	        	<div class="mp-select">
	                <span class="mp-select-caption ">全部分类</span>
	            </div>
	            <div class="mp-select">
	                <span class="mp-select-caption ">推荐排序</span>
	            </div>
	        </div>
			<div style="padding-top:0px;">
				<ul id="famous" class="mp-famous-list">
				<li v-for="item in famousList" class="mp-sight-group">
					<div class="mp-item-content">
						<div class="mp-sight-info">
							<a href="//touch.piao.qunar.com/touch/detail_989946426.html?st=a3clM0QlRTYlOTklQUYlRTclODIlQjklRTklOTclQTglRTclQTUlQTglMjZpZCUzRDM4MTcwJTI2dHlwZSUzRDAlMjZpZHglM0QxJTI2cXQlM0R0YWclMjZhcGslM0QzJTI2c2MlM0RUT1VDSCUyNmFidHJhY2UlM0Rid2QlNDAlRTYlOUMlQUMlRTUlOUMlQjAlMjZ1ciUzRCVFNSU4QyU5NyVFNCVCQSVBQyUyNmxyJTNEJUU1JThDJTk3JUU0JUJBJUFDJTI2ZnQlM0QlN0IlN0Q%3D&cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC" title = "故宫门票">
								<div class="mp-sight-imgcon">
									<img v-bind:src="item.src" alt="故宫" class="mp-sight-img">
								</div>
								<div class="mp-sight-detail">
									<h3 class="mp-sight-name">{{item.title}}</h3>
									<span class="mp-tag-word">
										{{item.tag}}
									</span>
									<span class="mp-sight-price">
										&yen;<em>{{ item.startingPrice }}</em>
										<span class="mp-lowprice-text">起</span>
									</span>
									<div class="mp-sight-comments">
										<span class="mpf-starlevel">
											<span class=""></span>
											<span class=""></span>
										</span>
										<span class="mp-comments-totalnum">
											{{item.comment}}评论
										</span>
									</div>
									<div class="mp-sight-location">
										<span class="mp-sight-address">{{item.address}}</span>
									</div>
								</div>
							</a>
						</div>
						<div class="mp-sight-ticket">
							<a href="//touch.piao.qunar.com/touch/productdetail.htm?productId=430250064&cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC%26list_index1%3D0%26list_index2%3D0">
								<h4 class="mp-ticket-name">{{ item.adultTicket }}</h4>
								<span class="mp-ticket-price">
									&yen;<em class="mp-ticket-price-em">{{ item.adultPrice }}</em>
								</span>
							</a>
						</div>
						<div class="mp-sight-ticket">
							<a href="//touch.piao.qunar.com/touch/productdetail.htm?productId=1211440215&cat=from_area%3Dts_type_nav%26from_index%3D0%26from_value%3D%25E6%2599%25AF%25E7%2582%25B9%25E9%2597%25A8%25E7%25A5%25A8%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC%26list_index1%3D0%26list_index2%3D1">
								<h4 class="mp-ticket-name">{{ item.studentTicket }}</h4>
								<span class="mp-ticket-price">
									&yen;
									<em class="mp-ticket-price-em">{{ item.studentPrice }}</em>
								</span>
							</a>
						</div>
					</div>
				</li>
			</ul>
			</div>
            
        </div>
	</div>
</template>

<script>
export default {
	 props: ['famousList']
}
</script>

<style>
.list{
	background:#f5f5f5;
}
.mp-filter {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: box;
    height: .8rem;
    background: #fff;
    width: 100%;
}
.mp-sight-info{
	padding:.2rem;
}
.mp-sight-info a{
	color: #00afc7;
	text-decoration: none;
}
.mp-sight-imgcon{
	float:left;
}
.mp-sight-img{
	width: 1.6rem;
	height: 1.6rem;
}
.mp-sight-detail {
    position: relative;
    overflow: hidden;
    padding-left: .2rem;
    height: 1.6rem;
}
.mp-sight-name {
    overflow: hidden;
    float: left;
    max-width: 60%;
    color: #212121;
    font-size: .32rem;
    line-height: .36rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-tag-word {
    display: inline-block;
    margin-left: .06rem;
    width: .3rem;
    height: .3rem;
    background: #ff1200;
    color: #fff;
    font-size: .24rem;
    line-height: .3rem;
    text-align: center;
}
.mp-sight-group {
    margin-bottom: .2rem;
    background: #fff;
}
.mp-sight-price {
    position: absolute;
    top: 0;
    right: 0;
    height: .36rem;
    color: #ff8300;
    font-size: .2rem;
}
.mp-sight-price em {
	font-size: .36rem;
}
.mp-sight-ticket{
	position: relative;
    height: .9rem;
    margin: 0 .2rem;
}
.mp-ticket-name{
	overflow: hidden;
    margin-right: 1.2rem;
    color: #212121;
    font-size: .28rem;
    line-height: .9rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mp-ticket-price{
	overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    width: 1.2rem;
    height: .9rem;
    color: #ff8300;
    font-size: .2rem;
    line-height: .9rem;
    text-align: right;
}
.mp-ticket-price-em{
	font-size: .36rem;
}
.mp-lowprice-text {
	color: #9e9e9e;
}
.mp-sight-comments {
	margin-top: .38rem;
	height: .64rem;
	line-height: .64rem;
}
.mp-comments-totalnum {
    position: relative;
    top: -.04rem;
    margin-left: .06rem;
    color: #9e9e9e;
    font-size: .24rem;
}
.mp-sight-location {
    position: absolute;
    bottom: 0;
    color: #9e9e9e;
    font-size: 0;
    white-space: nowrap;
}
.mp-sight-address{
	font-size: .24rem;
}
.mp-select{
    box-sizing: border-box;
    float:left;
    width: 50%;
    height: .8rem;
    overflow: hidden;
    position: relative;
    color: #212121;
    line-height: .8rem;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-bottom:1px solid #f5f5f5;
}
.mp-select-caption{
    width: 100%;
    height: .8rem;
    overflow: hidden;
    position: relative;
    color: #212121;
    line-height: .8rem;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-right: 1px solid #f5f5f5;
}

</style>