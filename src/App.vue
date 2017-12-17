<template class="bodyptb">
  <div id="app">
    <div class="top-menu">
      <div class="g-wrap cfix">
        <a v-on:click="redirectTo('/joke')" class="item hover">笑话</a>
        <a v-on:click="redirectTo('/punster')" class="item">段子</a>
        <a v-on:click="redirectTo('/voice')" class="item">声音</a>
        <a v-on:click="redirectTo('/photo')" class="item">图片</a>
        <a v-on:click="redirectTo('/video')" class="item">视频</a>
      </div>
    </div>
    <router-view id="router-view"/>
    <div class="footer">
      <div class="g-wrap cfix">
        <a v-on:click="redirectTo('/')" class="item hover"><em class="bgicon"></em>精华</a>
        <a v-on:click="redirectTo('/new_post')" class="item"><em class="bgicon"></em>新帖</a>
        <a v-on:click="redirectTo('/new')" class="item"><em class="bgicon"></em></a>
        <a v-on:click="redirectTo('/community')" class="item"><em class="bgicon"></em>社区</a>
        <a v-on:click="redirectTo('/mine')" class="item"><em class="bgicon"></em>我的</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    position: 'fixed',
    methods: {
      redirectTo: function (url) {
        this.$router.push({name: url})
      }
    }
  }
</script>

<style>
  /*footer*/
  .top-menu {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: 0.6rem;
    background-color: #f9f9f9;
    border-top: 1px solid #ddd;
    z-index: 3;
  }

  .top-menu .g-wrap {
    padding: 0.1rem 0 0;
  }

  .top-menu .item {
    width: 20%;
    float: left;
    text-align: center;
  }

  .footer {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 1rem;
    background-color: #f9f9f9;
    border-top: 1px solid #ddd;
    z-index: 3;
  }

  .footer .g-wrap {
    padding: 0.1rem 0 0;
  }

  .footer .item {
    width: 20%;
    float: left;
    text-align: center;
  }

  .footer .item .bgicon {
    display: block;
    width: 0.6rem;
    height: 0.5rem;;
    margin: 0 auto 0.03rem;
  }

  .footer .item:nth-child(1) .bgicon {
    background-image: url(/static/img/home.png)
  }

  .footer .item:nth-child(2) .bgicon {
    background-image: url(/static/img/new_post.png)
  }

  .footer .item:nth-child(3) .bgicon {
    background-image: url(/static/img/new_news.png)
  }

  .footer .item:nth-child(4) .bgicon {
    background-image: url(/static/img/community.png)
  }

  .footer .item:nth-child(5) .bgicon {
    background-image: url(/static/img/mine.png)
  }

  .footer .item.hover {
    color: #f4702d;
  }

  .footer .item.hover:nth-child(1) .bgicon {
    background-image: url(/static/img/home.png)
  }

  .footer .item.hover:nth-child(2) .bgicon {
    background-image: url(/static/img/new_post.png)
  }

  .footer .item.hover:nth-child(3) .bgicon {
    background-image: url(/static/img/new_news.png)
  }

  .footer .item.hover:nth-child(4) .bgicon {
    background-image: url(/static/img/community.png)
  }

  .footer .item.hover:nth-child(5) .bgicon {
    background-image: url(/static/img/mine.png)
  }
</style>
