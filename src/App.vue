<template>
  <div id="app" class="rule-max">
    <router-view class="news-body"/>
    <HomeFooter/>
  </div>
</template>
<script>
  import {jumpTo} from './common/methods'
  import HomeFooter from './common/HomeFooter'

  export default {
    name: 'app',
    position: 'fixed',
    methods: {
      redirectTo: function (url, needAuth = false) {
        jumpTo(url, needAuth)
      }
    },
    components: {
      'HomeFooter': HomeFooter
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

  .rule-max {
    max-width: 500px;
    margin: 0 auto;
  }

  body {
    width: 100%;
  }

  .news-body {
    padding: 0.7rem 0 0 0;
  }

  .bsbdj-content {
    padding: 1.5rem 0.5rem 0.25rem 0.5rem;
    font-size: 14px;
  }
</style>
