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
		  		<router-link class="mp-header-right-link" to="/list">
		  			<span class="mp-header-right-nav">
		  				北京
		  				<i class="header-right-bottom icon iconfont">&#xe630;</i>
		  			</span>
		  		</router-link>
		  	</div>
	  	</div>
	  	<div class="mp-banner-swipper">
	  		<swiper :options="swiperOptionAutoplay" ref="mySwiper" >	    
			    <swiper-slide>
			    	<div class="mp-banner-con">
			    		<img class="mp-banner" src="http://img1.qunarzz.com/piao/fusion/1710/f5/57137c621d75ba02.jpg_640x200_b984ddf7.jpg"/>
			    	</div>
			    </swiper-slide>
			    <swiper-slide>
			    	<div class="mp-banner-con">
			    		<img class="mp-banner" src="http://img1.qunarzz.com/piao/fusion/1609/15/630b82d932a3c402.jpg_640x200_862e836b.jpg"/>
			    	</div>
			    </swiper-slide>
			    <swiper-slide>
			    	<div class="mp-banner-con">
			    		<img class="mp-banner" src="http://img1.qunarzz.com/piao/fusion/1711/b3/66f7230d9ad6e002.jpg_640x200_077e61ee.jpg"/>
			    	</div>
			    </swiper-slide>
			    <swiper-slide>			    
			    	<div class="mp-banner-con">
			    		<img class="mp-banner" src="http://img1.qunarzz.com/piao/fusion/1710/16/1d7693c6bd8abd02.png_640x200_43c308dd.png"/>
			    	</div>
			    </swiper-slide>
			    <swiper-slide>
			    	<div class="mp-banner-con">
			    		<img class="mp-banner" src="http://img1.qunarzz.com/piao/fusion/1609/c9/cacbf705c5417e02.jpg_640x200_99b2676a.jpg"/>
			    	</div>
			    </swiper-slide>
			    <swiper-slide>
			    	<div class="mp-banner-con">
			    		<img class="mp-banner" src="http://img1.qunarzz.com/piao/fusion/1609/f3/52a119dbed871902.jpg_640x200_b4573df8.jpg"/>
			    	</div>
			    </swiper-slide>
			    <swiper-slide>
			    	<div class="mp-banner-con">
			    		<img class="mp-banner" src="http://img1.qunarzz.com/piao/fusion/1711/c5/2b4166f592b33202.jpg_640x200_27b41388.jpg"/>
			    	</div>
			    </swiper-slide>
			    <swiper-slide>
			    	<div class="mp-banner-con">
			    		<img class="mp-banner" src="http://img1.qunarzz.com/piao/fusion/1710/16/249e5d9c533f6e02.jpg_640x200_9d63493e.jpg"/>
			    	</div>
			    </swiper-slide>			    
		    	<div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
	  	</div>
	  	<div class="mp-icon-swiper">
	  		<swiper :options="swiperOption" ref="mySwiper" class="mp-icon-swiper-container">
	  			<swiper-slide class="mp-icon-page">		
			    	<div class="mp-icon-con">
				    	<a class="mp-icon-link">
				    		<div class="mp-icon-img-con">
				    			<img class="mp-icon-img" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png"/>
				    		</div>
				    		<div class="mp-icon-show">景点门票</div>
				    	</a>
			    	</div>
			    	<div class="mp-icon-con">
			    		<a class="mp-icon-link">
			    			<div class="mp-icon-img-con">
				    			<img class="mp-icon-img" src="http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png"/>
				    		</div>
				    		<div class="mp-icon-show">动植物园</div>
			    		</a>
			    	</div>
			    	<div class="mp-icon-con">
			    		<a class="mp-icon-link">
			    			<div class="mp-icon-img-con">
				    			<img class="mp-icon-img" src="http://img1.qunarzz.com/piao/fusion/1611/45/676b67d7078abc02.png"/>
				    		</div>
				    		<div class="mp-icon-show">故宫</div>
			    		</a>
			    	</div>
			    	<div class="mp-icon-con">
				    	<a class="mp-icon-link">
				    		<div class="mp-icon-img-con">
				    			<img class="mp-icon-img" src="http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png"/>
				    		</div>
				    		<div class="mp-icon-show">一日游</div>
				    	</a>
			    	</div>
			    	<div class="mp-icon-con">
			    		<a class="mp-icon-link">
			    			<div class="mp-icon-img-con">
				    			<img class="mp-icon-img" src="http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png"/>
				    		</div>
				    		<div class="mp-icon-show">必游榜单</div>
				    	</a>
			    	</div>
			    	<div class="mp-icon-con">
			    		<a class="mp-icon-link">
			    			<div class="mp-icon-img-con">
				    			<img class="mp-icon-img" src="http://img1.qunarzz.com/piao/fusion/1611/6d/ee9eb965690ce402.png"/>
				    		</div>
				    		<div class="mp-icon-show">秋色美</div>
				    	</a>
			    	</div>
			    	<div class="mp-icon-con">
			    		<a class="mp-icon-link">
			    			<div class="mp-icon-img-con">
				    			<img class="mp-icon-img" src="http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png"/>
				    		</div>
				    		<div class="mp-icon-show">游乐场</div>
				    	</a>
			    	</div>
			    	<div class="mp-icon-con">
			    		<a class="mp-icon-link">
			    			<div class="mp-icon-img-con">
				    			<img class="mp-icon-img" src="http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png"/>
				    		</div>
				    		<div class="mp-icon-show">泡温泉</div>
				    	</a>
			    	</div>
		 	 	</swiper-slide>
			    <swiper-slide>
			    	<div class="mp-icon-con">
				    	<a class="mp-icon-link">
				    		<div class="mp-icon-img-con">
				    			<img class="mp-icon-img" src="http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png"/>
				    		</div>
				    		<div class="mp-icon-show">城市观光</div>
				    	</a>
			    	</div>
			    	<div class="mp-icon-con">
			    		<a class="mp-icon-link">
			    			<div class="mp-icon-img-con">
				    			<img class="mp-icon-img" src="http://img1.qunarzz.com/piao/fusion/1611/29/c16cd064d85d8502.png"/>
				    		</div>
				    		<div class="mp-icon-show">玻璃栈道</div>
			    		</a>
			    	</div>
			    	<div class="mp-icon-con">
			    		<a class="mp-icon-link">
			    			<div class="mp-icon-img-con">
				    			<img class="mp-icon-img" src="http://img1.qunarzz.com/piao/fusion/1611/1c/a8a8d9023a814c02.png"/>
				    		</div>
				    		<div class="mp-icon-show">名胜古迹</div>
			    		</a>
			    	</div>
			    	<div class="mp-icon-con">
				    	<a class="mp-icon-link">
				    		<div class="mp-icon-img-con">
				    			<img class="mp-icon-img" src="https://img1.qunarzz.com/piao/fusion/1602/f2/71eb19f77e3f21f7.png"/>
				    		</div>
				    		<div class="mp-icon-show">周边游</div>
				    	</a>
			    	</div>
			    	<div class="mp-icon-con">
			    		<a class="mp-icon-link">
			    			<div class="mp-icon-img-con">
				    			<img class="mp-icon-img" src="http://img1.qunarzz.com/piao/fusion/1611/cd/07f33cc087f18d02.png"/>
				    		</div>
				    		<div class="mp-icon-show">自然风光</div>
				    	</a>
			    	</div>
			    	<div class="mp-icon-con">
			    		<a class="mp-icon-link">
			    			<div class="mp-icon-img-con">
				    			<img class="mp-icon-img" src="http://img1.qunarzz.com/piao/fusion/1611/ea/8cb1dce519375d02.png"/>
				    		</div>
				    		<div class="mp-icon-show">古北水镇</div>
				    	</a>
			    	</div>
			    	<div class="mp-icon-con">
			    		<a class="mp-icon-link">
			    			<div class="mp-icon-img-con">
				    			<img class="mp-icon-img" src="http://img1.qunarzz.com/piao/fusion/1707/34/9285073fde1eb702.png"/>
				    		</div>
				    		<div class="mp-icon-show">景点讲解</div>
				    	</a>
			    	</div>
			    	<div class="mp-icon-con">
			    		<a class="mp-icon-link">
			    			<div class="mp-icon-img-con">
				    			<img class="mp-icon-img" src="http://img1.qunarzz.com/piao/fusion/1611/be/a70e61e1f57ee302.png"/>
				    		</div>
				    		<div class="mp-icon-show">全部</div>
				    	</a>
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
.mp-icon-page{
	
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
