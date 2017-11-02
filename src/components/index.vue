<template>
  <ul class="index-table">
    <li v-for="item in data">
      <div class="index">
        <img src="../../static/img/head.png" class="head">
        <div class="name">
          <p class="color-3123DF">
            {{item.userDesc.nikeName}}
            <br>
            <small class="color-868780">{{item.newsDesc.createTime}}</small>
          </p>
        </div>
        <div class="content">{{item.text}}</div>
        <table class="table">
          <tr>
            <td>
              <img src="../../static/img/good.png">
              <span class="num">{{item.newsDesc.love}}</span>
            </td>
            <td>
              <img src="../../static/img/hate.png">
              <span class="num">{{item.newsDesc.hate}}</span>
            </td>
            <td>
              <img src="../../static/img/share.png">
              <span class="num">{{item.newsDesc.share}}</span>
            </td>
            <td>
              <img src="../../static/img/comment.png">
              <span class="num">{{item.newsDesc.comment}}</span>
            </td>
          </tr>
        </table>
      </div>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'index',
    data () {
      return {
        'data': []
      }
    },
    methods: {},
    created () {
//      this.$http.jsonp('http://api.markingyun.cn/sbgnews/jokes/getJokes', {
//        params: {
//          page: 10,
//          count: 10
//        },
//        jsonp: 'cb'
//      }).then((data) => {
//        this.data.data = data.data
//      }, (response) => {
//        alert('error=' + response)
//      })
//      this.$http.post('http://api.markingyun.cn/sbgnews/jokes/getJokes', {
//        page: 10,
//        count: 10
//      }, {emulateJSON: true}).then((data) => {
//        this.data.data = data.data.data
//        console.info(this.data.data)
//      }, (response) => {
//        alert('error=' + response)
//      })
      this.$http.get('/static/testdata.json').then((data) => {
        this.data = data.data.data
      }, (response) => {
        alert('error=' + response)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .index-table {
    list-style: none;
  }

  .index {
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
