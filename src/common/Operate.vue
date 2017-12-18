<template>
  <table class="table">
    <tr>
      <td>
        <img src="../assets/img/love.png"
             v-on:click="love(item.newsDesc,{'newsMark':item.newsDesc.newsMark,'newsType':item.newsDesc.newsType})">
        <span class="num">{{item.newsDesc.love}}</span>
      </td>
      <td>
        <img src="../assets/img/hate.png"
             v-on:click="hate(item.newsDesc, {'newsMark':item.newsDesc.newsMark,'newsType':item.newsDesc.newsType})">
        <span class="num">{{item.newsDesc.hate}}</span>
      </td>
      <td>
        <img src="../assets/img/share.png"
             v-on:click="share(item.newsDesc, {'newsMark':item.newsDesc.newsMark,'newsType':item.newsDesc.newsType})">
        <span class="num">{{item.newsDesc.share}}</span>
      </td>
      <td>
        <img src="../assets/img/comment.png"
             v-on:click="comment(item.newsDesc, {'newsMark':item.newsDesc.newsMark,'newsType':item.newsDesc.newsType})">
        <span class="num">{{item.newsDesc.comment}}</span>
      </td>
    </tr>
  </table>
</template>

<script>
  import {love, hate, share, comment, jumpTo} from '../common/methods'

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
      comment: function (newsDesc, data) {
        newsDesc.comment += 1
        comment(data)
      }
    }
  }
</script>

<style scoped>

  .table {
    border-bottom: 1px solid #CDC8B3;
    width: 100%;
    text-align: center;
  }

  .num {
    color: #868780;
  }
</style>
