// deviceId=&brand=samsung&verName=0.2.0&appId=hushuo&verCode=3&pMod=SM-G9300&plat=android&osVer=7.0&channel=pc&os=samsung
import 'isomorphic-fetch';
import fetchJsonp from "fetch-jsonp";
import "babel-polyfill";
import { hsURLBase } from '../env';



export const getToken=()=>{
  return fetchJsonp('http://service.100bt.com/onlineuser/getCookieInfo.jsonp').then(v=>v.json());
// return Promise.resolve({
//     BTValue:"123"
// });
}


export const editVote=(token,id,stageId,vote)=>{
  let url = new URL(hsURLBase + `w/act/20170914/edit/${id}/vote.json`);
  url.searchParams.append("tk",token);
  url.searchParams.append("stageType",stageId);
  url.searchParams.append("voteCount",vote);
//   return Promise.resolve({
//     code:0
//  });
  return fetch(url).then(res => res.json());
}

export const changeItemState=(token,data)=>{
  let url = new URL(hsURLBase + `w/act/20170914/edit/status/mod.json`);
  url.searchParams.append("tk",token);
  url.searchParams.append("statusJson",data);
//   return Promise.resolve({
//      code:0
//   });
  return fetch(url).then(res => res.json());
}

export const getEditorList = (_option) => {
    console.log(_option);
  let option = {
     ..._option
  }
  let list = ["tk",
    "stageType",
    "sortType",
    "offset",
    "limit",
    "actStoryId",
    "ddId",
    "dataStatus"];
  let url = new URL(hsURLBase + `w/act/20170914/edit/list.json`);
  list.forEach(v => {
    if (option[v] !== undefined) {
      url.searchParams.append(v, option[v])
    }
  });
//   let g=new Promise((a,b)=>{
//     setTimeout(()=>{
//         a({
//             "code": 0,
//             "popups": null,
//             "data": {
//                 "offset": 0,
//                 "limit": 10,
//                 "totalCount": 15,
//                 "datas": [
//                     {
//                         "id": 1,
//                         "ddId": 10007234,
//                         "inviterDdId": 10007234,
//                         "qq": "100000000",
//                         "name": "百田小说",
//                         "actStoryId": 1,
//                         "avatar": "http://img3.a0bi.com/upload/uc/20151209/1449663779958_3.jpg",
//                         "detail": "testdetail",
//                         "voiceUrl": "http://baidu.com/a.mp3",
//                         "dataStatus": 2,
//                         "stage1Vote": 30,
//                         "stage2Vote": 0,
//                         "rewardRank": 0,
//                         "insertTime": "2017-09-07 20:17:53"
//                     },
//                     {
//                         "id": 5,
//                         "ddId": 10007234,
//                         "inviterDdId": 10007234,
//                         "qq": "100000000",
//                         "name": "百田小说",
//                         "actStoryId": 2,
//                         "avatar": "http://img3.a0bi.com/upload/uc/20151209/1449663779958_3.jpg",
//                         "detail": "积分都快来减肥的快乐撒fjkdlasfjdksla分阶段绿山咖啡大家看了三分就打开了萨芬进度款啦风纪扣到拉萨风纪扣到拉萨风纪扣到拉萨附近的快乐撒发掘的快乐撒风景都卡死啦发经典款酸辣粉就到时卡拉夫电视接口啦放大镜斯卡拉发电视接口啦发的数据阿卡丽方法",
//                         "voiceUrl": "http://baidu.com/a.mp3",
//                         "dataStatus": 3,
//                         "stage1Vote": 0,
//                         "stage2Vote": 0,
//                         "rewardRank": 0,
//                         "insertTime": "2017-09-07 20:18:37"
//                     },
//                     {
//                         "id": 2,
//                         "ddId": 10007234,
//                         "inviterDdId": 10007234,
//                         "qq": "100000000",
//                         "name": "百田小说",
//                         "actStoryId": 1,
//                         "avatar": "http://img3.a0bi.com/upload/uc/20151209/1449663779958_3.jpg",
//                         "detail": "testdetail",
//                         "voiceUrl": "http://baidu.com/a.mp3",
//                         "dataStatus": 3,
//                         "stage1Vote": 60,
//                         "stage2Vote": 23,
//                         "rewardRank": 0,
//                         "insertTime": "2017-09-07 20:18:36"
//                     },
//                     {
//                         "id": 9,
//                         "ddId": 10007234,
//                         "inviterDdId": 10007234,
//                         "qq": "100000000",
//                         "name": "百田小说",
//                         "actStoryId": 3,
//                         "avatar": "http://img3.a0bi.com/upload/uc/20151209/1449663779958_3.jpg",
//                         "detail": "testdetail223",
//                         "voiceUrl": "http://baidu.com/a.mp3",
//                         "dataStatus": 1,
//                         "stage1Vote": 0,
//                         "stage2Vote": 0,
//                         "rewardRank": 0,
//                         "insertTime": "2017-09-07 19:31:40"
//                     },
//                     {
//                         "id": 12,
//                         "ddId": 10007234,
//                         "inviterDdId": 10007234,
//                         "qq": "100000000",
//                         "name": "百田小说",
//                         "actStoryId": 4,
//                         "avatar": "http://img3.a0bi.com/upload/uc/20151209/1449663779958_3.jpg",
//                         "detail": "testdetail3",
//                         "voiceUrl": "http://baidu.com/a.mp3",
//                         "dataStatus": 2,
//                         "stage1Vote": 0,
//                         "stage2Vote": 0,
//                         "rewardRank": 0,
//                         "insertTime": "2017-09-07 20:17:54"
//                     },
//                     {
//                         "id": 15,
//                         "ddId": 10007712,
//                         "inviterDdId": 2222222,
//                         "qq": "111111111",
//                         "name": "小编花花",
//                         "actStoryId": 1,
//                         "avatar": "http://www.100bt.com/resource/uc/images/defaultphoto.png",
//                         "detail": "描述啊啊啊",
//                         "voiceUrl": "https://www.bilibili.com/video/av14165866/",
//                         "dataStatus": 0,
//                         "stage1Vote": 0,
//                         "stage2Vote": 0,
//                         "rewardRank": 0,
//                         "insertTime": "2017-09-07 16:20:17"
//                     },
//                     {
//                         "id": 4,
//                         "ddId": 10007234,
//                         "inviterDdId": 10007234,
//                         "qq": "100000000",
//                         "name": "百田小说",
//                         "actStoryId": 2,
//                         "avatar": "http://img3.a0bi.com/upload/uc/20151209/1449663779958_3.jpg",
//                         "detail": "testdetail2",
//                         "voiceUrl": "http://baidu.com/a.mp3",
//                         "dataStatus": 3,
//                         "stage1Vote": 80,
//                         "stage2Vote": 0,
//                         "rewardRank": 0,
//                         "insertTime": "2017-09-07 20:18:37"
//                     },
//                     {
//                         "id": 6,
//                         "ddId": 10007234,
//                         "inviterDdId": 10007234,
//                         "qq": "100000000",
//                         "name": "百田小说",
//                         "actStoryId": 2,
//                         "avatar": "http://img3.a0bi.com/upload/uc/20151209/1449663779958_3.jpg",
//                         "detail": "testdetail2",
//                         "voiceUrl": "http://baidu.com/a.mp3",
//                         "dataStatus": 0,
//                         "stage1Vote": 0,
//                         "stage2Vote": 0,
//                         "rewardRank": 0,
//                         "insertTime": "2017-09-06 11:32:45"
//                     },
//                     {
//                         "id": 8,
//                         "ddId": 10007234,
//                         "inviterDdId": 10007234,
//                         "qq": "100000000",
//                         "name": "百田小说",
//                         "actStoryId": 3,
//                         "avatar": "http://img3.a0bi.com/upload/uc/20151209/1449663779958_3.jpg",
//                         "detail": "testdetail22",
//                         "voiceUrl": "http://baidu.com/a.mp3",
//                         "dataStatus": 0,
//                         "stage1Vote": 0,
//                         "stage2Vote": 0,
//                         "rewardRank": 0,
//                         "insertTime": "2017-09-06 11:32:53"
//                     },
//                     {
//                         "id": 3,
//                         "ddId": 10007234,
//                         "inviterDdId": 10007234,
//                         "qq": "100000000",
//                         "name": "百田小说",
//                         "actStoryId": 1,
//                         "avatar": "http://img3.a0bi.com/upload/uc/20151209/1449663779958_3.jpg",
//                         "detail": "testdetail2",
//                         "voiceUrl": "http://baidu.com/a.mp3",
//                         "dataStatus": 3,
//                         "stage1Vote": 60,
//                         "stage2Vote": 0,
//                         "rewardRank": 0,
//                         "insertTime": "2017-09-07 20:18:36"
//                     }
//                 ],
//                 "totalPage": 2
//             }
//         })
//       },500)
//   });
//   return g;

  return fetch(url).then(res => res.json())
}


//  状态 1=初赛，2=决赛，3=获奖名单
// sortType排序条件 0=默认，1=按上传时间,2=获奖名次,3=初赛投票数,4=决赛投票数
// offset limit 分页
// actStoryId作品类型 分别是1,2,3,4分别对应四个名称前端定
// ddId多多号 搜索框
// dataStatus数据状态,0=未审核，1=不通过，2=初赛，3=决赛，4=获奖