<template>
  <div v-on:click="goTo(item.userDesc.pageHome)">
    <img :src="item.userDesc.imgUrl" class="head-img">
    <h1 class="nick-name">{{item.userDesc.nickName}}</h1>
    <h2 class="create-date">{{item.newsDesc.createTime}}</h2>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    name: 'user-head',
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

  .head-img {
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.25rem 0.25rem 0.25rem 0.25rem;
    position: absolute;
    float: left;
  }

  .nick-name {
    width: 100%;
    height: 1rem;
    margin: 0.25rem 0.25rem 0.75rem 2rem;
    padding: 0 0 0 0;
    position: relative;
    float: left;
    font-size: 15px;
  }

  .create-date {
    width: 100%;
    height: 0.75rem;
    margin: 0.75rem 0.25rem 0.5rem 2rem;
    position: absolute;
    float: left;
    font-size: 12px;
  }
</style>
