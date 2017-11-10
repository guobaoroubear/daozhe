<template>
	<div>
		<ul id="mp-main">
			<li v-for="item in hotSpring" class="mpp-product-item">
				<router-link :to = "item.link">
					<div class="mp-productimg-wrapper">
				  		<img v-bind:src="item.src" alt="" class="mp-productimg-wrapper-img">
				  	</div>
				  	<div class="mpp-product-info">
				  		<p class="product-name">
				  			{{ item.name }}
				  		</p>
				  		<p class="product-describe">
				  			{{ item.describe }}
				  		</p>
				  		<div class="mpp-product-price">
				  			<span class="mpp-product-qunarprice">
				  				&yen;<em class="mpp-product-qunarprice-em">{{ item.price }}</em>
				  				<span class="mpp-product-pricestart">起</span>
				  			</span>
				  		</div>
				  	</div>	
				</router-link>	  	
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['hotSpring']
}
</script>

<style>
	.mpp-product-item {
	    background: #fff;
	    position: relative;
	    margin-bottom: .2rem;
	}
	.mp-productimg-wrapper {
	    overflow: hidden;
	    height: 0;
	    width: 100%;
	    padding-bottom: 43.37288%;
	}
	.mpp-product-item .mpp-product-info {
	    position: relative;
	    padding: .14rem .2rem .24rem .2rem;
	}
	.mp-productimg-wrapper-img {
    	width: 100%;
    	vertical-align: middle;
	}
	.mpp-product-item .product-name {
	    overflow: hidden;
	    padding-right: 2.2rem;
	    color: #212121;
	    font-size: .36rem;
	    line-height: .54rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.mpp-product-item .product-describe {
	    overflow: hidden;
	    color: #616161;
	    font-size: .26rem;
	    line-height: .45rem;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.mpp-product-item .mpp-product-price {
	    position: absolute;
	    top: .25rem;
	    right: .2rem;
	}
	.mpp-product-price .mpp-product-qunarprice {
    	color: #ff8300;
    	font-size: .18rem;
	}
	.mpp-product-qunarprice-em {
	    font-size: .4rem;
	    margin-left: .04rem;
	    font-weight: bold;
	}
	.mpp-product-pricestart {
	    color: #616161;
	    font-size: .22rem;
	}
</style>