import request from '@/utils/request.js';

export function postList(qurer){
  return request({
    url: 'test/order',
    method: 'get',
    params: qurer
  })
}

export function getProfit(quyer){
  return request({
    url: '/profit',
    method: 'get',
    params: quyer
  })
}
