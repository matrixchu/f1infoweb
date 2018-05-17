<template>
  <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="4" style="text-align: left; font-size: 24px"><span class="jhchuFamily jhchu-F"></span>F1信息大全</el-col>
            <el-col :span="16">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#F56C6C"
              text-color="#ffffff"
              active-text-color="#ffffff">
              <el-menu-item index="1">F1车队</el-menu-item>
              <el-submenu index="2">
                <template slot="title">F1车手</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3">F1赛道</el-menu-item>
              <el-menu-item index="4">比赛周末</el-menu-item>
            </el-menu>
            </el-col>
            <el-col :span="4">
            <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item>查看</el-dropdown-item>
                          <el-dropdown-item>新增</el-dropdown-item>
                          <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
             <span>王小虎</span>
            </el-col>
          </el-row>
</template>

<script>
    import bus from '@/components/bus.js'

    export default{
      name:'header',

      data() {
            return {
              activeIndex: '1'
            };
          },
          methods: {
            handleSelect(key, keyPath) {
              bus.$emit('header-message', key);
              console.log(key, keyPath);
            }
          }
    }
</script>

<style>
      .jhchu-F {
          font-size: 24px;
      }
</style>
