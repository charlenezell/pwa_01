// deviceId=&brand=samsung&verName=0.2.0&appId=hushuo&verCode=3&pMod=SM-G9300&plat=android&osVer=7.0&channel=pc&os=samsung
import 'isomorphic-fetch';
import fetchJsonp from "fetch-jsonp";
import "babel-polyfill";
import { hsURLBase } from '../env';



export const getToken=()=>{
  return fetchJsonp('http://service.100bt.com/onlineuser/getCookieInfo.jsonp').then(v=>v.json());
}


export const editVote=(token,id,stageId,vote)=>{
  let url = new URL(hsURLBase + `w/act/20170914/edit/${id}/vote.json`);
  url.searchParams.append("tk",token);
  url.searchParams.append("stageType",stageId);
  url.searchParams.append("voteCount",vote);
  return fetch(url).then(res => res.json());
}

export const changeItemState=(token,data)=>{
  let url = new URL(hsURLBase + `w/act/20170914/edit/status/mod.json`);
  url.searchParams.append("tk",token);
  url.searchParams.append("statusJson",data);
  return fetch(url).then(res => res.json());
}

export const getEditorList = (_option) => {
  let option = {
    ...{
      token: '49054768277D6FB307BB10C154649770-n1',
      offset: 0,
      limit: 100
    }, ..._option
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

  // return Promise.resolve({
  //   data:{
  //     datas:[{id:213,ddId:2313}]
  //   }
  // })
  return fetch(url).then(res => res.json())
}


//  状态 1=初赛，2=决赛，3=获奖名单
// sortType排序条件 0=默认，1=按上传时间,2=获奖名次,3=初赛投票数,4=决赛投票数
// offset limit 分页
// actStoryId作品类型 分别是1,2,3,4分别对应四个名称前端定
// ddId多多号 搜索框
// dataStatus数据状态,0=未审核，1=不通过，2=初赛，3=决赛，4=获奖