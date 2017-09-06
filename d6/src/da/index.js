// deviceId=&brand=samsung&verName=0.2.0&appId=hushuo&verCode=3&pMod=SM-G9300&plat=android&osVer=7.0&channel=pc&os=samsung
require('isomorphic-fetch');
require("babel-polyfill");
export const getRecommendList = () => {
  return fetch('/api/hs/a/index/story/recommend/list.json').then(res => {
    return {
      code:0,
      data:[
        {title:"123j",id:1},
        {title:"1222",id:2}
      ]
    }
  });
}
export const getQQRecommendList = () => {
  return fetch('/qq/recomment/qq_lian_men/0-60-1.json').then(res => {
    return res.json();
  });
}
