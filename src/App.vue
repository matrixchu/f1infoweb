<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-header style="text-align: right; font-size: 12px">
      <Header></Header>
    </el-header>

    <el-container>
      <el-aside width="150px" style="background-color: rgb(238, 241, 246)">
        <router-view name="nav_view"></router-view>
      </el-aside>

      <el-main>
        <router-view name="page_view"></router-view>
        <team-dialog></team-dialog>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
import Header from '@/components/header.vue'
import bus from '@/components/bus.js'
import teamDialog from '@/components/team_dialog.vue'

export default {

  data () {
    return {
      show: false
    }
  },
  components: {
    // ES6简写语法 Nav:Nav
    Header,
    bus,
    teamDialog
  },

  name: 'app'
}
</script>

<style>
  .el-header {
    background-color: #F56C6C;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

</style>
