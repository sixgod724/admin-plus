<template>
  <div class="echart-box" :id="id"></div>
</template>

<script>
import { bar } from '../utils.js';
export default {
  props: {
    id:{
      type: String
    },
    title:{
      type: String
    },
    xaixs: {
      type: Array
    },
    series: {
      type: Array
    },
    color:{
      type: Array
    },
    callback:{
      type: Function
    },
  },
  watch: {
    series:{
      handler:function(){
        this.Chart = bar(...Object.values(this.$props));
      },
      deep:true
    }
  },
  data() {
    return {
      Chart:null,
    }
  },
  mounted() {
    this.Chart = new bar(...Object.values(this.$props));
  },
}
</script>

<style scoped>
.echart-box {
  width: 100%;
}
</style>
