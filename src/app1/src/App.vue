<template>
  <div id="app1">
    <router-link to="/">内部路由一</router-link> |
    <router-link to="/about">内部路由二</router-link>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld'
}
</script>
<style lang="stylus" scoped>
#app1
  padding 20px
</style>

