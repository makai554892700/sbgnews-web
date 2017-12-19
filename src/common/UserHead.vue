<template>
  <div v-on:click="goTo(item.userDesc.pageHome)" class="bsbdj-head">
    <img :src="item.userDesc.imgUrl" class="head-img">
    <h1 class="nick-name">{{item.userDesc.nickName}}</h1>
    <h2 class="create-date">{{item.newsDesc.createTime}}</h2>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    name: 'UserHead',
    methods: {
      goTo: function (url) {
        if (url == null) {
          alert('usrl is null.')
        } else {
          window.location.href = url
        }
      }
    }
  }
</script>

<style scoped>
  .bsbdj-head .head-img {
    width: 1rem;
    height: 1rem;
    margin: 0.25rem 0.25rem 0.25rem 0.25rem;
    position: absolute;
    box-sizing: border-box;
  }

  .bsbdj-head .nick-name {
    height: 1rem;
    margin: 0.35rem 0 0.25rem 1.75rem;
    font-size: 15px;
    position: absolute;
    box-sizing: border-box;
    float: left;
  }

  .bsbdj-head .create-date {
    height: 0.75rem;
    margin: 0.85rem 0 0 1.75rem;
    box-sizing: border-box;
    position: absolute;
    font-size: 12px;
  }
</style>
