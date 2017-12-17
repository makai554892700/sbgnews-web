<template>
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
              <img src="/static/img/love.png">
              <span class="num">{{punster.newsDesc.love}}</span>
            </td>
            <td>
              <img src="/static/img/hate.png">
              <span class="num">{{punster.newsDesc.hate}}</span>
            </td>
            <td>
              <img src="/static/img/share.png">
              <span class="num">{{punster.newsDesc.share}}</span>
            </td>
            <td>
              <img src="/static/img/comment.png">
              <span class="num">{{punster.newsDesc.comment}}</span>
            </td>
          </tr>
        </table>
      </div>
    </li>
  </ul>
</template>
<script>
  import {getPunsters} from '../../common/methods'

  export default {
    name: 'punster',
    data: function () {
      return {
        'data': []
      }
    },
    methods: {},
    created: function () {
      getPunsters(this, {page: 0, count: 10, needRealText: true})
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
