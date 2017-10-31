<template>
  <ul class="index-table">
    <li v-for="item in items">
      <div class="index">
        <img src="../../static/img/head.png" class="head">
        <div class="name">
          <p class="color-3123DF">
            {{item.name}}
            <br>
            <small class="color-868780">{{item.time}}</small>
          </p>
        </div>
        <div class="content">{{item.content}}</div>
        <table class="table">
          <tr>
            <td>
              <img src="../../static/img/good.png">
              <span class="num">{{item.good}}</span>
            </td>
            <td>
              <img src="../../static/img/hate.png">
              <span class="num">{{item.hate}}</span>
            </td>
            <td>
              <img src="../../static/img/share.png">
              <span class="num">{{item.share}}</span>
            </td>
            <td>
              <img src="../../static/img/comment.png">
              <span class="num">{{item.comment}}</span>
            </td>
          </tr>
        </table>
      </div>
    </li>
  </ul>
</template>
<script>
  export default {
//    created () {
//      this.$http.get('/static/testdata.json', function (data) {
//        alert('succeed data=' + data)
//      }).error(function (data) {
//        alert('error data=' + data)
//      })
//    },
    data () {
      return {
        'items': [
          {
            'name': 'name1',
            'time': 'time1',
            'content': 'content1',
            'good': 'good1',
            'hate': 'hate1',
            'share': 'share1',
            'comment': 'comment1'
          },
          {
            'name': 'name2',
            'time': 'time2',
            'content': 'content2',
            'good': 'good2',
            'hate': 'hate2',
            'share': 'share2',
            'comment': 'comment2'
          }
        ]
      }
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
