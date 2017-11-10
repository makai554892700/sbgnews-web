<template>
  <ul class="photo-table">
    <li v-for="photo in data">
      <div class="photo">
        <img :src="photo.newsDesc.imgUrl" class="head">
        <div class="name">
          <p class="color-3123DF">
            {{photo.userDesc.nickName}}
            <br>
            <small class="color-868780">{{photo.newsDesc.createTime}}</small>
          </p>
        </div>
        <div class="content">{{photo.text}}</div>
        <table class="table">
          <tr>
            <td>
              <img src="/static/img/love.png">
              <span class="num">{{photo.newsDesc.love}}</span>
            </td>
            <td>
              <img src="/static/img/hate.png">
              <span class="num">{{photo.newsDesc.hate}}</span>
            </td>
            <td>
              <img src="/static/img/share.png">
              <span class="num">{{photo.newsDesc.share}}</span>
            </td>
            <td>
              <img src="/static/img/comment.png">
              <span class="num">{{photo.newsDesc.comment}}</span>
            </td>
          </tr>
        </table>
      </div>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'photo',
    data () {
      return {
        'data': []
      }
    },
    methods: {},
    created () {
      this.$http.post('/sbgnews/api/bsbdj/getPhotos', {
        page: 0,
        count: 10,
        needRealText: true
      }, {emulateJSON: true}).then((data) => {
        this.data = data.data.data
      }, (response) => {
        alert('error=' + response)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .photo-table {
    list-style: none;
  }

  .photo {
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
