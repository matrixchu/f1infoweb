<template>
  <el-dialog
    title="title"
    :visible.sync="visible"
    @close="show = false"
    :show="show">
    <span>this is a dialog</span>
  </el-dialog>
</template>

<script>
import bus from '@/components/bus.js'
export default {
  data () {
    return {
      visible: this.show
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show () {
      this.visible = this.show
    }
  },

  created () {
    var _this = this
    bus.$on('team-dailog-message', function (msg) {
      _this.show = msg
      console.log(msg)
    })
  }
}
</script>

<style scoped>

</style>
