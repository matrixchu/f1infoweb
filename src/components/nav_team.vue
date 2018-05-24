<template>
  <el-menu @select="handleSelect">
    <el-menu-item index="team_cur">
      <span class="jhchuFamily jhchu-caidan_cheduiguanli"></span>
      <template slot="title">当前车队</template>
    </el-menu-item>
    <el-menu-item index="team_hist">
      <template slot="title"><span class="jhchuFamily jhchu-caidan_cheduiguanli"></span>历史车队</template>
    </el-menu-item>

  </el-menu>
</template>

<script>
import bus from '@/components/bus.js'

export default {
  name: 'nav',

  methods: {
    handleSelect (key, keyPath) {
      bus.$emit('nav-team-message', key)
      console.log(key, keyPath)
    }
  },
  created () {
    bus.$on('header-message', function (msg) {
      console.log(msg)
    })
  }
}
</script>

<style>
  .jhchu-caidan_cheduiguanli {
    font-size: 16px;
  }
</style>
