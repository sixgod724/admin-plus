<template>
    <div>
        <el-row type="flex" :gutter="14">
            <el-col :lg="8">
                <div class="card">
                    <div class="card-body">
                        <h5>Congratulations 🎉 John!</h5>
                        <p class="card-text font-small-2">You have won gold medal</p>
                        <h3 class="mb-75 mt-2 pt-50"><a class="" href="3">$48.9k</a></h3>
                        <el-button type="primary">成功按钮</el-button>
                        <img class="congratulation-medal" src="../../assets/badge.svg" />
                    </div>
                </div>
            </el-col>
            <el-col :lg="16">
                <div class="card card-statistics">
                    <div class="card-header">
                        <h4 class="card-title">Statistics</h4>
                        <p class="card-text font-small-2 mb-0">Updated 1 month ago</p>
                    </div>
                    <div class="card-body statistics-body">
                        <el-row>
                            <el-col v-for="item in 4" :lg="6" :md="12">
                                <div class="media">
                                    <div class="media-aside mr-2">
                                        <span class="badge-light-primary rounded-circle b-avatar" style="width: 48px;height: 48px;">
                                            <span class="b-avatar-custom"><i class="el-icon-position"></i></span>
                                        </span>
                                    </div>
                                    <div class="media-body">
                                        <h4 class="font-weight-bolder mb-0">230k</h4>
                                        <p class="card-text font-small-3 mb-0">Sales</p>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row type="flex" :gutter="14">
            <el-col :span="8">
                <el-row :gutter="14" style="width: 100%;">
                    <el-col :span="12">
                        <div class="card">
                            <div class="card-body pb-50">
                                <h6>Orders</h6>
                                <h2>2,76k</h2>
                                <bar 
                                style="min-height: 85px;" 
                                id="demo" 
                                :xaixs="order.xaixs" 
                                :series="order.series" 
                                :color="['#fdab5d']" 
                                />
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="card">
                            <div class="card-body pb-50">
                                <h6>Profit</h6>
                                <h2>6,27k</h2>
                                <lines 
                                style="min-height: 85px;" 
                                id="demo1" 
                                :xaixs="profit_list.xaixs" 
                                :series="profit_list.series" 
                                :color="['#00cfe8']" 
                                />
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="14"></el-col>
        </el-row>
    </div>
</template>

<script>
import { postList,getProfit } from '@/api/test.js';
import bar from '@/components/echarts/type/bar';
import lines from '@/components/echarts/type/line';
export default {
    components: {
        bar,
        lines
    },
    data() {
        return {
            order: {
                xaixs: [],
                series: []
            },
            profit_list: {
                xaixs: [],
                series: []
            },
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.show();
            this.profit();
        },
        show() {
            postList()
                .then(data => {
                    let xaxis = [];
                    let datas = [];
                    for (let item of data) {
                        xaxis.push(item.type);
                        datas.push(item.cjl);
                    }
                    let maxArr = new Array(datas.length).fill(100);
                    this.order.xaixs = xaxis;
                    this.order.series = [
                        {
                            name: '销量',
                            type: 'bar',
                            zlevel: 1,
                            data: datas,
                            itemStyle: {
                                barBorderRadius: 50
                            },
                            barGap: '-100%'
                        },
                        {
                            data: maxArr,
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: 'rgba(243,243,243,0.55)',
                                    barBorderRadius: 50,
                                    legend: {
                                        show: false
                                    }
                                }
                            }
                        }
                    ];
                })
        },
        profit(){
            getProfit()
            .then(data => {
                let xaxis = [];
                let datas = [];
                for (let item of data) {
                    xaxis.push(item.type);
                    datas.push(item.lr);
                }
                this.profit_list.xaixs = xaxis;
                this.profit_list.series = [
                    {
                        name: '利润',
                        type: 'line',
                        data: datas,
                    }
                ];
            })
        }
    }
};
</script>

<style lang="scss" scoped>
.card {
    .card-header {
        .card-title {
            margin-bottom: 0;
        }
    }
}
.congratulation-medal {
    position: absolute;
    top: 0;
    right: 37px;
}
h5 {
    font-size: 1.07rem;
    margin-bottom: 0.5rem;
}
.card-text {
    margin-bottom: 1rem;
}
.pt-50 {
    padding-top: 0.5rem;
}
.pb-50 {
    padding-bottom: 0.5rem;
}
.mb-75 {
    margin-bottom: 0.75rem;
}
.mb-0 {
    margin-bottom: 0;
}
.media {
    display: flex;
    align-items: flex-start;
    .media-aside {
        display: flex;
    }
}
.badge-light-primary {
    background-color: rgba(115, 103, 240, 0.12);
}
.rounded-circle {
    border-radius: 50%;
}
.b-avatar {
    text-align: center;
}
.mr-2 {
    margin-right: 1.5rem;
}
.b-avatar-custom {
    width: inherit;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #7367f0;
    i {
        font-size: 1.3rem;
    }
}
.font-weight-bolder {
    font-weight: 600 !important;
}
.card-statistics {
    .card-header {
        padding-left: 2.4rem;
    }
    .statistics-body {
        padding: 2rem 2.4rem !important;
    }
}
</style>
