<template>
  <div class="top-menu">
    <div class="g-wrap cfix">
      <a v-on:click="redirectTo('/joke')" class="item hover">笑话</a>
      <a v-on:click="redirectTo('/punster')" class="item">段子</a>
      <a v-on:click="redirectTo('/voice')" class="item">声音</a>
      <a v-on:click="redirectTo('/photo')" class="item">图片</a>
      <a v-on:click="redirectTo('/video')" class="item">视频</a>
    </div>
  </div>
</template>

<script>
  import {jumpTo} from '../common/methods'

  export default {
    name: 'NewsHead',
    methods: {
      redirectTo: function (url) {
        jumpTo(url)
      }
    }
  }
</script>

<style scoped>

  .top-menu {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    height: 0.6rem;
    background-color: #f9f9f9;
    border-top: 1px solid #ddd;
    z-index: 3;
  }

  .top-menu .g-wrap {
    padding: 0.1rem 0 0;
  }

  .top-menu .item {
    width: 20%;
    float: left;
    text-align: center;
  }
</style>
