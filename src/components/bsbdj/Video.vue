<template>
  <ul class="video-table">
    <li v-for="video in data">
      <div class="video">
        <img src="../../../static/img/user.png" class="head">
        <div class="name">
          <p class="color-3123DF">
            {{video.userDesc.nikeName}}
            <br>
            <small class="color-868780">{{video.newsDesc.createTime}}</small>
          </p>
        </div>
        <div class="content">{{video.text}}</div>
        <table class="table">
          <tr>
            <td>
              <img src="../../../static/img/love.png">
              <span class="num">{{video.newsDesc.love}}</span>
            </td>
            <td>
              <img src="../../../static/img/hate.png">
              <span class="num">{{video.newsDesc.hate}}</span>
            </td>
            <td>
              <img src="../../../static/img/share.png">
              <span class="num">{{video.newsDesc.share}}</span>
            </td>
            <td>
              <img src="../../../static/img/comment.png">
              <span class="num">{{video.newsDesc.comment}}</span>
            </td>
          </tr>
        </table>
      </div>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'video',
    data () {
      return {
        'data': []
      }
    },
    methods: {},
    created () {
//      this.$http.post('http://api.markingyun.cn/sbgnews/videos/getvideos', {
//        page: 10,
//        count: 10
//      }, {emulateJSON: true}).then((data) => {
//        this.data.data = data.data.data
//        console.info(this.data.data)
//      }, (response) => {
//        alert('error=' + response)
//      })
      this.$http.get('/static/test/getVideos.json').then((data) => {
        this.data = data.data.data
      }, (response) => {
        alert('error=' + response)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .video-table {
    list-style: none;
  }

  .video {
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
