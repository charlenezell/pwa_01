// deviceId=&brand=samsung&verName=0.2.0&appId=hushuo&verCode=3&pMod=SM-G9300&plat=android&osVer=7.0&channel=pc&os=samsung
export const getRecommendList = () => {
  return fetch('/api/hs/a/index/story/recommend/list.json').then(res => {
    return res.json();
  });
}
