// deviceId=&brand=samsung&verName=0.2.0&appId=hushuo&verCode=3&pMod=SM-G9300&plat=android&osVer=7.0&channel=pc&os=samsung
require('isomorphic-fetch');
require("babel-polyfill");

export const getEditorList=(token='49054768277D6FB307BB10C154649770-n1')=>{
  return Promise.resolve({
    data:{
      datas:[{id:213,ddId:2313}]
    }
  })
  // return fetch(`/hs/w/act/20170914//edit/list.json?tk=${token}`).then(res=>res.json())
}
export const getQQRecommendList = () => {
  return fetch('/qq/recomment/qq_lian_men/0-60-1.json').then(res => {
    return res.json();
  });
}
