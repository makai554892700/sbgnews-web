<template>
  <div>
    <NewsHead></NewsHead>
    <ul class="photo-table">
      <li v-for="item in data">
        <UserHead :item="item"></UserHead>
        <div class="content">{{item.text}}</div>
        <img class="photo-img" :src="item.cdnImg"/>
        <Operate :item="item"></Operate>
      </li>
    </ul>
  </div>
</template>
<script>
  import {getPhotos} from '../../common/methods'
  import NewsHead from '../../common/NewsHead'
  import UserHead from '../../common/UserHead'
  import Operate from '../../common/Operate'

  export default {
    name: 'photo',
    data: function () {
      return {
        'data': []
      }
    },
    created: function () {
      getPhotos(this, {page: 0, count: 10, needRealText: true})
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

  .photo-table {
    list-style: none;
  }

  .content {
    margin: 10px 10px 10px 10px;
    font-size: 14px;
  }

  .photo-img {
    width: 100%;
    padding: 0 1rem 0 1rem;
  }
</style>
