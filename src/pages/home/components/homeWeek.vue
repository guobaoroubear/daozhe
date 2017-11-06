<template>
	<div>
		<ul id="famous">
			<h2 class="famous-title">周末去哪儿</h2>
			<li v-for="item in weekList">	
			  	<div class="famous-img">
			  		<img v-bind:src="item.src" alt="">
			  	</div>
			  	<div class="famous-content">
			  		<p class="famous-name">
			  			{{ item.name }}
			  		</p>
			  		<p class="famous-describe">
			  			{{ item.describe }}
			  		</p>
			  	</div>	
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	 props: ['weekList']
}
</script>

<style>
	.famous-title{
		height: .8rem;
    	padding-left: .26rem;
    	line-height: .8rem;
    	color: #212121;
	}
	.famous-img{
		overflow: hidden;
	    height: 0;
	    padding-bottom: 37.4375%;
	}
	.famous-img img{
		width:100%;
		vertical-align: middle;
	}
	.famous-content{
		position: relative;
    	padding: .14rem .2rem .2rem .2rem;
	}
	.famous-name{
		overflow: hidden;
	    padding-right: 1.4rem;
	    color: #212121;
	    font-size: .28rem;
	    line-height: .48rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.famous-describe{
		overflow: hidden;
	    padding-right: 1.4rem;
	    color: #616161;
	    font-size: .24rem;
	    line-height: .42rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
</style>
