<template>
  <el-container style="height: 100%;">
    <el-aside class="hidden-md-and-down" style="width: auto;">
      <app-menu />
    </el-aside>
    <el-container>
      <app-head />
      <app-main />
      <el-footer style="background: none;">Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script>
import AppMain from './components/AppMain';
import AppHead from './components/APPHead';
import AppMenu from './components/APPMenu'
export default {
  components: {
    AppMain,
    AppHead,
    AppMenu
  },
  data() {
    return {

    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.el-footer {
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
  line-height: 80px;
  z-index: 2000;
  box-shadow: 0 0 20px #00000026;
  overflow: hidden;
}

.el-main {
  color: #333;
}
::v-deep .el-menu-item,
::v-deep .el-submenu__title {
  height: 42px;
  line-height: 42px;
}
::v-deep .el-submenu__title {
  &:hover {
    background-color: transparent;
  }
}
::v-deep .el-menu-item,
::v-deep .el-menu-item {
  &:hover {
    background-color: transparent;
  }
}
</style>
