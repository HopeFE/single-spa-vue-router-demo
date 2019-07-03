<template>
  <div id="app1">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
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
  display block
</style>

