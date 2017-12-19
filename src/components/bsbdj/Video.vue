<template>
  <div>
    <NewsHead></NewsHead>
    <ul class="video-table">
      <li v-for="item in data">
        <UserHead :item="item"></UserHead>
        <h1 class="bsbdj-content">{{item.text}}</h1>
        <video :src="item.videoUri" controls="controls" class="bsbdj-video">
          您的浏览器不支持 video 标签。
        </video>
        <Operate :item="item"></Operate>
      </li>
    </ul>
  </div>
</template>
<script>
  import {getVideos} from '../../common/methods'
  import NewsHead from '../../common/NewsHead'
  import UserHead from '../../common/UserHead'
  import Operate from '../../common/Operate'

  export default {
    name: 'video',
    data: function () {
      return {
        'data': []
      }
    },
    created: function () {
      getVideos(this, {page: 0, count: 10, needRealText: true})
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

  .bsbdj-video {
    width: 100%;
    display: block;
    padding: 0 0.5rem 0 0.5rem;
    box-sizing: border-box;
  }
</style>
