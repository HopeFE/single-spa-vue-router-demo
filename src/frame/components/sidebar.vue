<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-aside width="180px" style="background-color: rgb(238, 241, 246);height: 40vh">
      <el-menu
        :default-openeds="['1', '3']"
        background-color="#fafbfe"
        text-color="#757c95"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>APP1
          </template>
          <el-menu-item index="1-1">
            <a @click="goto('about')">about</a>
          </el-menu-item>
          <el-menu-item index="1-2">
            <a @click="goto('')">home</a>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-message"></i>APP2
          </template>
          <el-menu-item index="2-1">
            <a @click="goto('about')">about</a>
          </el-menu-item>
          <el-menu-item index="2-2">
            <a @click="goto('')">home</a>
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
    goto (url) {
      navigateToUrl(`/app1/#/${url}`)
    }
  }
}
</script>
