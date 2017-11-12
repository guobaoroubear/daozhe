<template>
	<div class="list-header">
        <div class="mp-header">
              <router-link to="/" class="mp-header-left icon iconfont">&#xe63f;</router-link>
              <div class="mp-header-center">
                  <a class="mp-link-area">
                      <i class="header-center-search icon iconfont">&#xe632;</i>
                      <span class="mp-header-center-singleline">输入城市/景点/游玩主题</span>
                  </a>
              </div>
              <div class="mp-header-right">
                  <a class="mp-header-right-link">
                      <span class="mp-header-right-nav">
                          搜索
                      </span>
                  </a>
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
	background: #f5f5f5;
}
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
</style>