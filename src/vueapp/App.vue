<template>
  <div id="vueapp">
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
