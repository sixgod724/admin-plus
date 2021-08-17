import Mock from 'mockjs'
import {
    Random
} from 'mockjs'

Mock.setup({
    timeout: 1000 //设置请求延时时间
})

Mock.mock('test/order', () => {
    let data = {};
    let datalist = [];
    for (let i = 0; i < 5; i++) {
        const o = {
            cjl: Random.natural(1, 100),
            type: Random.province(),
            time: Random.time('HH:mm:ss'),
            source: 'Mock'
        }
        datalist.push(o);
    }
    data.data = datalist;
    return data
})

Mock.mock('/profit', 'get', () => {
    let data = [];
    for (let i = 0; i < 6; i++) {
        const o = {
            lr: Random.natural(1, 100),
        }
        data.push(o);
    }
    return data;
})
