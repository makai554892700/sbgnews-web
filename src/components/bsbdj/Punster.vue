<template>
  <div>
    <div class="top-menu">
      <div class="g-wrap cfix">
        <a v-on:click="redirectTo('/joke')" class="item hover">笑话</a>
        <a v-on:click="redirectTo('/punster')" class="item">段子</a>
        <a v-on:click="redirectTo('/voice')" class="item">声音</a>
        <a v-on:click="redirectTo('/photo')" class="item">图片</a>
        <a v-on:click="redirectTo('/video')" class="item">视频</a>
      </div>
    </div>
    <ul class="punster-table">
      <li v-for="punster in data">
        <div class="punster">
          <img :src="punster.userDesc.imgUrl" class="head">
          <div class="name">
            <p class="color-3123DF">
              {{punster.userDesc.nickName}}
              <br>
              <small class="color-868780">{{punster.newsDesc.createTime}}</small>
            </p>
          </div>
          <div class="content">{{punster.text}}</div>
          <table class="table">
            <tr>
              <td>
                <img src="/static/img/love.png"
                     v-on:click="love(punster.newsDesc, {'newsMark':punster.newsDesc.newsMark,'newsType':punster.newsDesc.newsType})">
                <span class="num">{{punster.newsDesc.love}}</span>
              </td>
              <td>
                <img src="/static/img/hate.png"
                     v-on:click="hate(punster.newsDesc, {'newsMark':punster.newsDesc.newsMark,'newsType':punster.newsDesc.newsType})">
                <span class="num">{{punster.newsDesc.hate}}</span>
              </td>
              <td>
                <img src="/static/img/share.png"
                     v-on:click="share(punster.newsDesc, {'newsMark':punster.newsDesc.newsMark,'newsType':punster.newsDesc.newsType})">
                <span class="num">{{punster.newsDesc.share}}</span>
              </td>
              <td>
                <img src="/static/img/comment.png"
                     v-on:click="comment(punster.newsDesc, {'newsMark':punster.newsDesc.newsMark,'newsType':punster.newsDesc.newsType})">
                <span class="num">{{punster.newsDesc.comment}}</span>
              </td>
            </tr>
          </table>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {getPunsters, love, hate, share, comment} from '../../common/methods'

  export default {
    name: 'punster',
    data: function () {
      return {
        'data': []
      }
    },
    methods: {
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
      },
      redirectTo: function (url) {
        this.$router.push({name: url})
      }
    },
    created: function () {
      getPunsters(this, {page: 0, count: 10, needRealText: true})
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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

  .punster-table {
    list-style: none;
  }

  .punster {
    border-bottom: 1px solid #CDC8B3;
  }

  .head {
    width: 50px;
    margin: 10px;
    position: absolute;
  }

  .name {
    margin-left: 90px;
    padding-top: 10px;
    height: 60px;
  }

  .content {
    margin: 10px 10px 10px 10px;
    font-size: 14px;
  }

  .table {
    width: 100%;
    text-align: center;
  }

  .num {
    color: #868780;
  }

  .color-868780 {
    color: #868780;
  }

  .color-3123DF {
    color: #3123DF;
  }
</style>
