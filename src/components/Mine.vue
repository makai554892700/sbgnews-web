<template>
  <div>
    <div>恭喜用户：{{this.$route.params.username}}登陆成功(参数传递)</div>
    <p>恭喜用户：{{userName}}登陆成功(参数获取)</p>
    <!--<p v-if="userName">恭喜用户：<strong v-model="userName"></strong>登陆成功(参数获取)</p>-->
  </div>
</template>
<script>
  export default {
    name: 'app',
    position: 'fixed',
    data: function () {
      return {
        userName: sessionStorage.getItem('userName')
      }
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
