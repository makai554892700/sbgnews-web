<template>
  <div class="top-menu rule-max">
    <a v-on:click="redirectTo('/joke',1)" class="item" v-bind:class="{hover: lastItem==1}">笑话</a>
    <a v-on:click="redirectTo('/punster',2)" class="item" v-bind:class="{hover: lastItem==2}">段子</a>
    <a v-on:click="redirectTo('/voice',3)" class="item" v-bind:class="{hover: lastItem==3}">声音</a>
    <a v-on:click="redirectTo('/photo',4)" class="item" v-bind:class="{hover: lastItem==4}">图片</a>
    <a v-on:click="redirectTo('/video',5)" class="item" v-bind:class="{hover: lastItem==5}">视频</a>
  </div>
</template>

<script>
  import {jumpTo} from '../common/methods'

  let tempItem = 1

  export default {
    name: 'NewsHead',
    data: function () {
      return {
        lastItem: tempItem
      }
    },
    methods: {
      redirectTo: function (url, item) {
        if (tempItem !== item) {
          tempItem = item
          jumpTo(url)
        }
      }
    }
  }
</script>

<style scoped>
  .top-menu {
    position: fixed;
    width: 100%;
    top: 0;
    height: 0.7rem;
    background-color: #f0ffff;
    z-index: 3;
  }

  .top-menu .item {
    width: 20%;
    height: 0.7rem;
    line-height: 0.7rem;
    float: left;
    font-size: 10px;
    color: #00ff00;
    display: block;
    text-align: center;
  }

  .top-menu .item.hover {
    font-weight: bold;
    font-size: 14px;
    color: #ff0000;
  }
</style>
