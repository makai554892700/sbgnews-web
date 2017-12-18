<template>
  <div>
    <NewsHead></NewsHead>
    <ul class="punster-table">
      <li v-for="item in data">
        <UserHead :item="item"></UserHead>
        <div class="content">{{item.text}}</div>
        <Operate :item="item"></Operate>
      </li>
    </ul>
  </div>
</template>
<script>
  import {getPunsters} from '../../common/methods'
  import NewsHead from '../../common/NewsHead'
  import UserHead from '../../common/UserHead'
  import Operate from '../../common/Operate'

  export default {
    name: 'punster',
    data: function () {
      return {
        'data': []
      }
    },
    created: function () {
      getPunsters(this, {page: 0, count: 10, needRealText: true})
    },
    components: {
      'NewsHead': NewsHead,
      'Operate': Operate,
      'UserHead': UserHead
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .punster-table {
    list-style: none;
  }

  .content {
    margin: 10px 10px 10px 10px;
    font-size: 14px;
  }
</style>
