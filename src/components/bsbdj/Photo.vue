<template>
  <div>
    <NewsHead></NewsHead>
    <ul>
      <li v-for="item in data">
        <UserHead :item="item"></UserHead>
        <h1 class="bsbdj-content">{{item.text}}</h1>
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
  .photo-img {
    width: 100%;
    padding: 0 1rem 0 1rem;
  }
</style>
