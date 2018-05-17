<template>
<el-container style="height: 100%; border: 1px solid #eee">
        <el-header style="text-align: right; font-size: 12px">
            <Header></Header>
        </el-header>

        <el-container>
           <el-aside width="150px" style="background-color: rgb(238, 241, 246)">
                <Nav></Nav>
            </el-aside>

             <el-main>
                  <el-table>
                    <el-table-column prop="date" label="日期" width="140">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="120">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
                  </el-table>
                </el-main>
        </el-container>

</el-container>
</template>

<script>
   import Header from '@/components/header.vue'
   import Nav from '@/components/nav.vue'

   export default {
       components: {
         // ES6简写语法 Nav:Nav
         Header,
         Nav
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
