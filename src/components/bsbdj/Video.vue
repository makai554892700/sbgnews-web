<template>
  <div>
    <NewsHead></NewsHead>
    <ul class="video-table">
      <li v-for="item in data">
        <UserHead :item="item"></UserHead>
        <div class="content">{{item.text}}</div>
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

  .video-table {
    list-style: none;
  }

  .bsbdj-video {
    padding: 0 1rem 0 1rem;
    width: 100%;
  }

  .content {
    margin: 10px 10px 10px 10px;
    font-size: 14px;
  }
</style>
