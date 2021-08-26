<template>
    <div class="meeting-warp">
        <el-input v-model="input.input1" placeholder="请输入内容"></el-input>
        <el-input v-model="input.input2" placeholder="请输入内容"></el-input>
        <el-dialog
          :visible.sync="dialogVisible"
          width="30%">
          <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="内容1">
                  <el-input v-model="form.input1"></el-input>
              </el-form-item>
              <el-form-item label="内容2">
                  <el-input v-model="form.input2"></el-input>
              </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="save">确 定</el-button>
          </span>
        </el-dialog>
        <el-button type="primary" @click="show">修改</el-button>
        <div>
            展示区域- 
            {{cut}}
            <el-button type="primary" @click="i+=1">切换</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: '原始值',
            dialogVisible: false,
            input:{
                input1: '内容11',
                input2: '内容22',
            },
            form: {
                input1: '',
                input2: '',
            },
            arr: [1,2,3,4,5],
            i: 0
        };
    },
    computed:{
        cut(){
            let len = this.arr.length;
            if(this.i == len){
                this.i = 0;
            }
            return this.arr[this.i]
        }
    },
    methods:{
        show(){
            this.dialogVisible = true;
            this.form = Object.assign({},this.input);
        },
        save(){
            this.dialogVisible = false;
            this.input = this.form;
        },
    },
};
</script>

<style lang="scss" scoped>
.meeting-title {
    text-align: center;
}
.meeting-region {
    padding: 15px 20px;
    background-color: #fff;
    margin-bottom: 20px;
    border-radius: 4px;
}
.meeting-main-select {
    display: flex;
}
</style>
