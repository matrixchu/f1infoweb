<template>
<el-table :data="tableData" style="width: 100%">
  <el-table-column
    v-for="col in cols"
    :prop="col.prop" :label="col.label" >
  </el-table-column>
</el-table>
</template>

<script>
    export default {

      data() {
          return {
            tableData: [{
              team_id: '1',
              team_name: '1'
            }],
            cols: [
              {prop: 'team_id', label: '车队ID'},
              {prop: 'team_name', label: '车队名称'}
            ]
          }
        },

        methods:{
          querytable(){
             var resdata = [];
             var _this = this;
            this.$ajxj.get('/api/f1info/v1/f1team/info?team_name=test',{}).then(function (res) {
                                                                                           _this.tableData = res.data.data;
                                                                                        }).catch(function (error) {

                                                                                        })
          }
        },

        created () {
          this.querytable();
        }
    }
</script>
