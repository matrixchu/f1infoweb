<template>
    <el-menu v-if="isTeam">
                <el-menu-item index="1">
                  <span class="jhchuFamily jhchu-caidan_cheduiguanli"></span><template slot="title">当前车队</template>
                </el-menu-item>
                <el-menu-item index="2">
                  <template slot="title"><span class="jhchuFamily jhchu-caidan_cheduiguanli"></span>历史车队</template>
                </el-menu-item>

    </el-menu>
</template>

<script>
    import bus from '@/components/bus.js'
        export default{
          name:'nav',

          data(){
              return{
              isTeam:true
              }
          },

           methods: {
            },
            created() {
              bus.$on('header-message', function(msg) {
                if(msg===1){
                    this.isTeam = true;
                }
                alert("2:"+this.isTeam);
                console.log(data);
              });
            }
        }
</script>

<style>
    .jhchu-caidan_cheduiguanli {
              font-size: 16px;
          }
</style>
