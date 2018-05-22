<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      v-for="col in cols"
      :prop="col.prop" :label="col.label">
    </el-table-column>
  </el-table>
</template>

<script>
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
      ]
    }
  },

  methods: {
    queryTableCols(){
      var _this = this
      this.$ajxj.get('/api/f1info/v1/tableColumnInfo?tableName=f1_team',{}).then(function (res){
        _this.cols = res
      }).catch(function (error){
        console.log(error)
      })
    },

    querytable () {
      var _this = this
      this.$ajxj.get('/api/f1info/v1/f1team/allinfo', {}).then(function (res) {
        _this.tableData = res
      }).catch(function (error) {
        console.log(error)
      })
    },

    insertData(){
      this.$ajxj.post('/api/f1info/v1/f1team/add',{
        'team_id':2,
        'team_name':'法拉利车队',
        'team_constructor':'法拉利'
      }).then(function (res) {
        console.log(res)
      }).catch(function (error) {
        console.log(error)
      })
    }
  },

  created () {
    this.queryTableCols()
    this.querytable()

  }
}
</script>
