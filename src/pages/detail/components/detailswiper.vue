<template>
	<div>
	  	<div class="detail-swipper">
	  		<swiper :options="swiperOption" ref="mySwiper"  >	    
			    <swiper-slide >
			    	<router-link to="/detail">
				    	<div class="detail-img-con">
				    		<img class="detail-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_800x800_04f227ef.jpg" />
				    	</div>
				    </router-link>			    	
			    </swiper-slide>
			     <swiper-slide >
			     	<router-link to="/detail">
				    	<div class="detail-img-con">
				    		<img class="detail-img" src="http://img1.qunarzz.com/sight/p0/1410/e3/73da8d3e19cdc41c1932d4fcd22ec792.water.jpg_800x800_ef9611de.jpg" />
				    	</div>
				    </router-link>			    	
			    </swiper-slide>
			     <swiper-slide >
			     	<router-link to="/detail">
				    	<div class="detail-img-con">
				    		<img class="detail-img" src="http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_800x800_eb941a31.jpg" />
				    	</div>
				    </router-link>
			    </swiper-slide>
			     <swiper-slide >
			     	<router-link to="/detail">
				    	<div class="detail-img-con">
				    		<img class="detail-img" src="http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_800x800_5e80fcc3.png" />
				    	</div>
				    </router-link>			    	
			    </swiper-slide>
		    	<div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
	  	</div>
	</div>
</template>

<script>
export default {
	name: "header",
	props : ['bannerSwiperInfo','iconSwiperInfo'],
	data() {
      return {
        notNextTick: true,
        swiperOption:{
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: 'swiper-pagination',
          observeParents: true,
        }
      }
    }      
}
</script>

<style scoped>
.detail-swipper{
	height:100%;
	width: 100%;
	background: #000;
} 
.detail-img-con{
	margin-top: 3rem;
	width: 100%;
	height: 0;
	padding-bottom: 150%;	
}
.detail-img{
	width: 100%;
}
</style>