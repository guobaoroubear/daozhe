<template>
	<div class="mp-header">
        <router-link to="/" class="mp-header-left mp-iconfont" id="msgoback">
      	く
        </router-link>
        <h1 class="mp-header-title">北京温泉排行榜</h1>
    </div>
</template>

<script>
export default {
	 props: ['hotSpring']
}
</script>

<style scoped>
	.mp-header {
	    position: relative;
	    height: .88rem;
	    background: #00bcd4;
	    z-index: 91;
	}
	.mp-header-left {
	    left: 0;
	    top: 0;
	    width: .8rem;
	    height: .88rem;
	    line-height: .88rem;

	    position: absolute;
	    font-size: .36rem;
	    color: #fff;
	    text-align: center;
	}
	.mp-header-title {
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