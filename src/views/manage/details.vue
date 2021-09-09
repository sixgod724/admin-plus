<template>
  <div ref="test" style="width: 300px;height: 200px;overflow: auto;background-color: #eee;" class="indexs">
    <div v-for="(item,i) in list" :key="i" :title="i">{{item}}</div>
    <div>已经在底部了</div>
  </div>
</template>
<script>
import Vue from "vue"
export default {
  name: 'indexss',
  data() {
    return {
        list: [],
        data1: [1,2,3,4]
    };
  },
  created() {
      this.$nextTick(() => {
          this.list=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
      })
  },
  methods:{
    
  },
  updated(){
      if(this.list){
          this.$refs.test.scrollTop = this.$refs.test.clientHeight;
      }
  },
};
</script>
<style scoped>
.indexs {
  width: 100%;
}
</style>
