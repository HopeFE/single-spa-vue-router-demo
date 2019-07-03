<template>
  <div id="app" class="app-wrapper">
    <header class="navbar">
      <img src="https://devstatic.ymm56.com/major-client/static/img/icon_header_logo.90961eb5.png" class="logo" />
    </header>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style lang="stylus" scoped>
.app-wrapper
  // position relative
  // height 100%
  // width 100%
  .navbar
    background-color #fff
    height 60px
    box-shadow 0 0 12px 0 rgba(0,0,0,.05)
    .logo
      height 30px
      width auto
      padding-left 0
      margin-top 16px
      margin-left 24px
      cursor pointer
</style>
