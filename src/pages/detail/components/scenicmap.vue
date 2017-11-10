<template>
	<div class="scenicmap">
		<div class="scenicmap-header">
			<router-link to="/detail" class="iconfont scenicmap-header-return">&#xe63f;</router-link>
			<h1 class="scenicmap-header-title">景点地图</h1>
		</div>
		<div id="container">{{map}}</div>
		<div id="bottom">{{position}}</div>
		
	</div>
</template>
<script>
	  
	export default{  
		data() {
			return {
				position : "",
				map: ""
			}
		},
		methods: {

			getMap: () => {
				  var map = new AMap.Map('container', {
					    resizeEnable: true,
					    zoom:11,
					    center: [116.397428, 39.90923] 
					    })     
			},
			getPosition: () => {
				
				var mapObj = new AMap.Map('container')
				mapObj.plugin('AMap.Geolocation', function () {
				    var geolocation = new AMap.Geolocation({
				        enableHighAccuracy: true,
				        showButton: true,        
				        buttonPosition: 'LB',   
				        zoomToAccuracy:true      
				    });
				    mapObj.addControl(geolocation);
				    geolocation.getCurrentPosition();
				    AMap.event.addListener(geolocation, 'complete', function(res){
				    	console.log(res.formattedAddress)	
				    	this.position = res.formattedAddress	  
				    	console.log(this.position)  
				    	
				    });
				    AMap.event.addListener(geolocation, 'error', function(error){
				    	console.log(error)
				    });     
				})
			}
		},
		mounted() {
			this.getPosition(),
			this.getMap()

		}
	  
	
	
   	
}

</script>
<style scope>
#bottom{
	position: relative;
	bottom: 50%;
	left: 50%;
	width: 100%;
	height: 40px;
	background: #dadada;
	color:red;
	font-size: 16px;
}
#container{
	width: 100%;
	height: 600px;
}
.scenicmap-header{
	position: relative;
	height: .88rem;
	background: #00bcd4;
	z-index: 91;
}
.scenicmap-header-return{
	position: absolute;
	left: 0;
	top: 0;
	width: .8rem;
	height: .88rem;
	line-height: .88rem;
	font-size: .36rem;
	color: #fff;
	text-align: center;
}
.scenicmap-header-title{
	overflow: hidden;
	margin: 0 1rem;
	line-height: .88rem;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: .32rem;
	text-align: center;
	color: #fff;
}
</style>