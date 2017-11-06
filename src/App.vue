<template>
  <div id="app">
    <router-view/>
    <div id="menu" class="menu">
      <div id="one" class="subMenu text-center">
        <img src="/static/img/comment.png" data-imgname="my"/>
        <div class="menu_name">精华</div>
      </div>
      <div id="two" class="subMenu text-center">
        <img src="/static/img/new_post.png" data-imgname="QQ"/>
        <div class="menu_name">新帖</div>
      </div>
      <div id="three" class="subMenu text-center">
        <img src="/static/img/comment.png" data-imgname="my"/>
      </div>
      <div id="fore" class="subMenu text-center">
        <img src="/static/img/community.png" data-imgname="my"/>
        <div class="menu_name">社区</div>
      </div>
      <div id="five" class="subMenu text-center">
        <img src="/static/img/mine.png" data-imgname="my"/>
        <div class="menu_name">我的</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    position: 'fixed'
  }
</script>

<style>
  .menu {
    display: block;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    color: #474747;
    padding-top: 10px;
    border-top: 1px solid #eee;
    background-color: #fff;
  }

  .menu_name {
    height: 30px;
    width: 100%;
    line-height: 30px;
  }

  .subMenu {
    width: 20%;
    float: left;
    cursor: pointer;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  .text-center {
    text-align: center
  }

</style>
