<template>
  <div>
    <NewsHead></NewsHead>
    <ul class="voice-table">
      <li v-for="item in data">
        <UserHead :item="item"></UserHead>
        <h1 class="bsbdj-content">{{item.text}}</h1>
        <div>
          <img class="voice-img" :src="item.cdnImg"/>
          <audio :src="item.voiceuri" controls="controls" class="mp3">
            您的浏览器不支持 audio 标签。
          </audio>
        </div>
        <Operate :item="item"></Operate>
      </li>
    </ul>
  </div>
</template>
<script>
  import {getVoices} from '../../common/methods'
  import NewsHead from '../../common/NewsHead'
  import UserHead from '../../common/UserHead'
  import Operate from '../../common/Operate'

  export default {
    name: 'voice',
    data: function () {
      return {
        'data': []
      }
    },
    created: function () {
      getVoices(this, {page: 0, count: 10, needRealText: true})
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

  .voice-table {
    list-style: none;
  }

  .mp3 {
    width: 100%;
  }

  .voice-img {
    width: 100%;
    padding: 0 1rem 0 1rem;
  }
</style>
