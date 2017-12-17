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
    <ul class="voice-table">
      <li v-for="voice in data">
        <div class="voice">
          <img :src="voice.userDesc.imgUrl" class="head">
          <div class="name">
            <p class="color-3123DF">
              {{voice.userDesc.nickName}}
              <br>
              <small class="color-868780">{{voice.newsDesc.createTime}}</small>
            </p>
          </div>
          <div class="content">{{voice.text}}</div>
          <div>
            <img class="voice-img" :src="voice.cdnImg"/>
            <audio :src="voice.voiceuri" controls="controls" class="mp3">
              您的浏览器不支持 audio 标签。
            </audio>
          </div>
          <table class="table">
            <tr>
              <td>
                <img src="/static/img/love.png"
                     v-on:click="love(voice.newsDesc, {'newsMark':voice.newsDesc.newsMark,'newsType':voice.newsDesc.newsType})">
                <span class="num">{{voice.newsDesc.love}}</span>
              </td>
              <td>
                <img src="/static/img/hate.png"
                     v-on:click="hate(voice.newsDesc, {'newsMark':voice.newsDesc.newsMark,'newsType':voice.newsDesc.newsType})">
                <span class="num">{{voice.newsDesc.hate}}</span>
              </td>
              <td>
                <img src="/static/img/share.png"
                     v-on:click="share(voice.newsDesc, {'newsMark':voice.newsDesc.newsMark,'newsType':voice.newsDesc.newsType})">
                <span class="num">{{voice.newsDesc.share}}</span>
              </td>
              <td>
                <img src="/static/img/comment.png"
                     v-on:click="comment(voice.newsDesc, {'newsMark':voice.newsDesc.newsMark,'newsType':voice.newsDesc.newsType})">
                <span class="num">{{voice.newsDesc.comment}}</span>
              </td>
            </tr>
          </table>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import {getVoices, love, hate, share, comment} from '../../common/methods'

  export default {
    name: 'voice',
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
      getVoices(this, {page: 0, count: 10, needRealText: true})
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

  .voice-table {
    list-style: none;
  }

  .voice {
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

  .mp3 {
    width: 100%;
  }

  .voice-img {
    width: 100%;
    padding: 0 1rem 0 1rem;
  }
</style>
