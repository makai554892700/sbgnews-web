<template>
  <div>
    <img :src="item.userDesc.imgUrl" class="head">
    <div class="name">
      <p class="color-3123DF">
        {{item.userDesc.nickName}}
        <br>
        <small class="color-868780">{{item.newsDesc.createTime}}</small>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    name: 'user-head'
  }
</script>

<style scoped>

  .head {
    width: 50px;
    margin: 10px;
    position: absolute;
  }

  .name {
    margin-left: 90px;
    padding-top: 10px;
    height: 60px;
  }

  .color-868780 {
    color: #868780;
  }

  .color-3123DF {
    color: #3123DF;
  }
</style>
