<template>
	<div>
		<div class="mp-header">
	  		<a class="mp-header-left icon iconfont">&#xe63f;</a>
		  	<div class="mp-header-center"> 
		  		<a class="mp-link-area">
		  			<i class="header-center-search icon iconfont">&#xe632;</i>
		  			<span class="mp-header-center-singleline">输入城市/景点/游玩主题</span>
		  		</a>
		  	</div>
		  	<div class="mp-header-right">
		  		<a class="mp-header-right-link">
		  			<span class="mp-header-right-nav">
		  				北京
		  				<i class="header-right-bottom icon iconfont">&#xe630;</i>
		  			</span>
		  		</a>
		  	</div>
	  	</div>
	  	<div class="mp-banner-swipper">
	  		<swiper :options="swiperOptionAutoplay" ref="mySwiper"  >	    
			    <swiper-slide v-for="item in bannerSwiperInfo" :key="item.id">
			    	<router-link :to="item.link">
				    	<div class="mp-banner-con">
				    		<img class="mp-banner" :src="item.imgUrl" />
				    	</div>
			    	</router-link>
			    </swiper-slide>
		    	<div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
	  	</div>
	 	<div class="mp-icon-swiper">
	  		<swiper :options="swiperOption" ref="mySwiper" class="mp-icon-swiper-container">
	  			<swiper-slide class="mp-icon-page" v-for="item in iconSwiperInfo" :key="item.pageNum">		
			    	<div class="mp-icon-con" v-for="list in item.pageContent" :key="list.id">
				    	<router-link class="mp-icon-link" :to="list.link">
				    		<div class="mp-icon-img-con">
				    			<img class="mp-icon-img" :src="list.imgUrl"/>
				    		</div>
				    		<div class="mp-icon-show">{{list.title}}</div>
				    	</router-link>
			    	</div>
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
        swiperOptionAutoplay: {
          autoplay: 3000,
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          observeParents: true,         
        },
        swiperOption:{
          direction: 'horizontal',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          observeParents: true,
        }
      }
    }      
}
</script>

<style scoped>
.mp-header{
	position:relative;
	display:flex;
	width:100%;
	height:0.88rem;
	line-height:0.88rem;
	background:#00bcd4;
	color:#fff;
}
.mp-header-left{
	float:left;
	width:0.4rem;
	height:.88rem;
	line-height:0.88rem;	
	font-size:0.36rem;
	padding: 0 0.2rem;
	text-align:center;
	font-family:'iconfont';	
	color:#fff;
}
.mp-header-center{
	box-sizing:border-box;
	float:left;
	flex:1;
	position:relative;
	height:0.6rem;
	margin:0.14rem 0;
	background:#fff;
	line-height:0.6rem;
	border-radius:0.06rem;	
}
.mp-link-area{
	display:block;
	height:100%;
	color:#e4e7ea;
}
.header-center-search{
	position:absolute;
	display:inline-block;
	left:0.2rem;
	font-family:'iconfont';
}
.mp-header-center-singleline{
	position:absolute;
	display:inline-block;
	overflow:hidden;
	left:0.6rem;
	top:0;
	width:3.6rem;
	white-space:nowrap;
	text-overflow:ellipsis;
}
.mp-header-right{
	float:left;	
}
.mp-header-right-nav{
	padding:0 .22rem;
	color:#fff;
}
.mp-banner-con{
	width:100%;
	height:0;
	padding-bottom:31.25%;
}
.mp-banner{
	width:100%;
}
.mp-icon-swiper-container{
	overflow:hidden;
	position:relative;
	width:100%;
	z-index:2;
	height:3.7rem;
	padding-top:0.1rem;
	background:#fff;
}
.mp-icon-con{
	float:left;
	width:25%;
	padding-top:0.3rem;
	height:1.3rem;
	text-align:center;
}
.mp-icon-link{
}
mp-icon-img-con{
	width:0.66rem;
	height:0.66rem;
	background:#f0f5f8;
	border-radius:.2rem;
}
.mp-icon-img{
	width:0.66rem;
	height:0.66rem;
	vertical-align:middle;	
}
.mp-icon-show{
	overflow:hidden;
	white-space:nowrap;
	text-overflow:ellipsis;
	margin-top:0.2rem;
	color:#212121;
	font-size:0.28rem;	
}

</style>
