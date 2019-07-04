<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-aside width="180px" style="background-color: rgb(238, 241, 246);height: 100vh">
      <el-menu
        :default-openeds="['1', '3']"
        background-color="#fafbfe"
        text-color="#757c95"
      >
        <el-submenu index="1">
          <template slot="title">Vue1</template>
          <el-menu-item index="1-1" @click="goto('app1', 'about')">about</el-menu-item>
          <el-menu-item index="1-2" @click="goto('app1', '')">home</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">Vue2</template>
          <el-menu-item index="2-1" @click="goto('app2', 'about')">about</el-menu-item>
          <el-menu-item index="2-2" @click="goto('app2', '')">home</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">React</template>
          <el-menu-item index="3-1" @click="goto('react', '')">
            ant-design
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
  </el-scrollbar>
</template>
<script>
import { navigateToUrl } from "single-spa";
export default {
  methods: {
    goto (app, url) {
      navigateToUrl(`/${app}/#/${url}`)
    }
  }
}
</script>
