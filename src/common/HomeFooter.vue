<template>
  <div class="bottom-menu rule-max">
    <a v-on:click="redirectTo('/',1)" class="item" v-bind:class="{hover: lastItem==1}"><em class="item-img"></em>精华</a>
    <a v-on:click="redirectTo('/new_post',2)" class="item" v-bind:class="{hover: lastItem==2}"><em
      class="item-img"></em>新帖</a>
    <a v-on:click="redirectTo('/new',3)" class="item" v-bind:class="{hover: lastItem==3}"><em class="item-img"></em></a>
    <a v-on:click="redirectTo('/community',4)" class="item" v-bind:class="{hover: lastItem==4}"><em
      class="item-img"></em>社区</a>
    <a v-on:click="redirectTo('/mine',5,true)" class="item" v-bind:class="{hover: lastItem==5}"><em
      class="item-img"></em>我的</a>
  </div>
</template>

<script>
  import {jumpTo} from '../common/methods'

  export default {
    name: 'HomeFooter',
    data: function () {
      return {
        lastItem: 1
      }
    },
    methods: {
      redirectTo: function (url, item, needLogin = false) {
        if (this.lastItem !== item) {
          this.lastItem = item
          jumpTo(url, needLogin)
        }
      }
    }
  }
</script>

<style scoped>

  .bottom-menu {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 1rem;
    background-color: #f9f9f9;
    border-top: 1px solid #ddd;
    z-index: 3;
  }

  .bottom-menu .item {
    width: 20%;
    float: left;
    font-size: 12px;
    text-align: center;
  }

  .bottom-menu .item.hover {
    color: red;
  }

  .bottom-menu .item-img {
    font-style: normal;
    display: block;
    width: 0.5rem;
    height: 0.5rem;;
    margin: 0 auto;
    background-size: 100% 100%;
  }

  .bottom-menu .item:nth-child(1) .item-img {
    background-image: url(../assets/img/home.png)
  }

  .bottom-menu .item:nth-child(2) .item-img {
    background-image: url(../assets/img/new_post.png)
  }

  .bottom-menu .item:nth-child(3) .item-img {
    background-image: url(../assets/img/new_news.png)
  }

  .bottom-menu .item:nth-child(4) .item-img {
    background-image: url(../assets/img/community.png)
  }

  .bottom-menu .item:nth-child(5) .item-img {
    background-image: url(../assets/img/mine.png)
  }

  .bottom-menu .item.hover:nth-child(1) .item-img {
    background-image: url(../assets/img/home.png)
  }

  .bottom-menu .item.hover:nth-child(2) .item-img {
    background-image: url(../assets/img/new_post.png)
  }

  .bottom-menu .item.hover:nth-child(3) .item-img {
    background-image: url(../assets/img/new_news.png)
  }

  .bottom-menu .item.hover:nth-child(4) .item-img {
    background-image: url(../assets/img/community.png)
  }

  .bottom-menu .item.hover:nth-child(5) .item-img {
    background-image: url(../assets/img/mine.png)
  }
</style>
