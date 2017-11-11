<template>
	<div class="list-paging">

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
	
}
</script>

<style>
	.list{
		background: #f5f5f5;
	}
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