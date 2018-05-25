<template>
  <el-table :data="tableData" style="width: 100%" class="team-el-table">
    <el-table-column show-overflow-tooltip= true
      v-for="col in cols"
      :prop="col.prop" :label="col.label">
      <template slot-scope="scope">
        <!--<div v-if="col.prop==='team_name'" style="color:#1135ff;text-decoration:underline;cursor:pointer;" @click="getMore(scope.row)">{{ scope.row[col.prop] }}</div>-->
        <div v-if="col.prop==='team_name'"><el-button type="text" @click="getMore(scope.row)">{{ scope.row[col.prop]}}</el-button> </div>
        <div v-else-if="col.prop==='team_desc'"><el-button  type="text" round @click="getInfo(scope.row[col.prop])">详细</el-button></div>
        <div  v-else>{{ scope.row[col.prop] }}</div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import bus from '@/components/bus.js'
export default {

  data () {
    return {
      tableData: [{
        team_id: '1',
        team_name: '1',
        team_constructor: ''
      }],
      cols: [
        {prop: 'team_id', label: '车队ID'},
        {prop: 'team_name', label: '车队名称'},
        {prop: 'team_constructor', label: '制造商'}
      ],
      show: false
    }
  },

  methods: {
    queryTableCols () {
      var _this = this
      this.$ajxj.get('/api/f1info/v1/tableColumnInfo?tableName=f1_team', {}).then(function (res) {
        _this.cols = res
      }).catch(function (error) {
        console.log(error)
      })
    },

    querytable (is_cur) {
      var _this = this
      this.$ajxj.get('/api/f1info/v1/f1team/allinfo', {params: {'isCur': is_cur}}).then(function (res) {
        _this.tableData = res
      }).catch(function (error) {
        console.log(error)
      })
    },

    getInfo (msg) {
      this.$alert(msg, '车队信息', {
        confirmButtonText: '确定',
        callback: action => {

        }
      })
    },

    getMore (row) {
      bus.$emit('team-id', row['team_id'])
      bus.$emit('team-dailog-message', true)
    },

    insertData () {
      this.$ajxj.post('/api/f1info/v1/f1team/add', {
        'team_id': 2,
        'team_name': '法拉利车队',
        'team_constructor': '法拉利'
      }).then(function (res) {
        console.log(res)
      }).catch(function (error) {
        console.log(error)
      })
    }
  },

  created () {
    var _this = this
    bus.$on('nav-team-message', function (msg) {
      if (msg === 'team_cur') {
        _this.querytable('Y')
      } else if (msg === 'team_hist') {
        _this.querytable('N')
      } else {
        _this.querytable('')
      }
      console.log(msg)
    })
    this.queryTableCols()
    this.querytable('')
  }
}
</script>
