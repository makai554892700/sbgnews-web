<template>
  <table class="table">
    <tr>
      <td>
        <img src="../assets/img/love.png" class="operate-img"
             v-on:click="love(item.newsDesc,{'newsMark':item.newsDesc.newsMark,'newsType':item.newsDesc.newsType})">
        <span class="operate-num">{{item.newsDesc.love}}</span>
      </td>
      <td>
        <img src="../assets/img/hate.png" class="operate-img"
             v-on:click="hate(item.newsDesc, {'newsMark':item.newsDesc.newsMark,'newsType':item.newsDesc.newsType})">
        <span class="operate-num">{{item.newsDesc.hate}}</span>
      </td>
      <td>
        <img src="../assets/img/share.png" class="operate-img"
             v-on:click="share(item.newsDesc, {'newsMark':item.newsDesc.newsMark,'newsType':item.newsDesc.newsType})">
        <span class="operate-num">{{item.newsDesc.share}}</span>
      </td>
      <td>
        <img src="../assets/img/comment.png" class="operate-img" v-on:click="goTo(item.url)"/>
        <!--<img src="../assets/img/comment.png"-->
        <!--v-on:click="comment(item.newsDesc, {'newsMark':item.newsDesc.newsMark,'newsType':item.newsDesc.newsType})">-->
        <span class="operate-num">{{item.newsDesc.comment}}</span>
      </td>
    </tr>
  </table>
</template>

<script>
  import {love, hate, share, jumpTo} from '../common/methods'

  export default {
    props: ['item'],
    name: 'Operate',
    methods: {
      redirectTo: function (url) {
        jumpTo(url)
      },
      love: function (newsDesc, data) {
        newsDesc.love += 1
        love(data)
      },
      hate: function (newsDesc, data) {
        newsDesc.hate += 1
        hate(data)
      },
      share: function (newsDesc, data) {
        newsDesc.share += 1
        share(data)
      },
      goTo: function (url) {
        if (url == null) {
          alert('usrl is null.')
        } else {
          window.location.href = url
        }
      }
      // comment: function (newsDesc, data) {
      //   newsDesc.comment += 1
      //   comment(data)
      // }
    }
  }
</script>

<style scoped>

  .operate-img {
    width: 0.3rem;
    height: 0.3rem;
    padding: 0.2rem 0 0.2rem 0.3rem;
    display: block;
    position: absolute;
  }

  .table {
    width: 100%;
    height: 0.7rem;
    border-bottom: 1px solid #CDC8B3;
  }

  .operate-num {
    font-size: 16px;
    width: 25%;
    height: 0.7rem;
    line-height: 0.7rem;
    float: left;
    display: block;
    padding: 0 0 0 0.7rem;
    text-align: center;
  }
</style>
