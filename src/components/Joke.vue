<template>
  <ul class="joke-table">
    <li v-for="joke in data">
      <div class="joke">
        <img :src="joke.userDesc.imgUrl" class="head">
        <div class="name">
          <p class="color-3123DF">
            {{joke.userDesc.nickName}}
            <br>
            <small class="color-868780">{{joke.newsDesc.createTime}}</small>
          </p>
        </div>
        <div class="content">{{joke.text}}</div>
        <table class="table">
          <tr>
            <td>
              <img src="/static/img/love.png"
                   v-on:click="love({'newsMark':joke.newsDesc.newsMark,'newsType':joke.newsDesc.newsType})">
              <span class="num">{{joke.newsDesc.love}}</span>
            </td>
            <td>
              <img src="/static/img/hate.png"
                   v-on:click="hate({'newsMark':joke.newsDesc.newsMark,'newsType':joke.newsDesc.newsType})">
              <span class="num">{{joke.newsDesc.hate}}</span>
            </td>
            <td>
              <img src="/static/img/share.png"
                   v-on:click="share({'newsMark':joke.newsDesc.newsMark,'newsType':joke.newsDesc.newsType})">
              <span class="num">{{joke.newsDesc.share}}</span>
            </td>
            <td>
              <img src="/static/img/comment.png"
                   v-on:click="comment({'newsMark':joke.newsDesc.newsMark,'newsType':joke.newsDesc.newsType})">
              <span class="num">{{joke.newsDesc.comment}}</span>
            </td>
          </tr>
        </table>
      </div>
    </li>
  </ul>
</template>
<script>
  import {getJocks, Love, Hate, Share, Comment} from '../common/methods'

  export default {
    name: 'joke',
    data: function () {
      return {
        'data': []
      }
    },
    methods: {
      love: function (data) {
        Love(this, data)
      },
      hate: function (data) {
        Hate(this, data)
      },
      share: function (data) {
        Share(this, data)
      },
      comment: function (data) {
        Comment(this, data)
      }
    },
    created: function () {
      getJocks(this, {page: 0, count: 10, needRealText: true})
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .joke-table {
    list-style: none;
  }

  .joke {
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
