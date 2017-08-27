import React from 'react';
let style = {
    maxWidth: "100%"
}
const NovelList = ({ novelList = {},itemClick }) => {
    let _novelList = Object.keys(novelList).map(v => novelList[v]);
    return <div className="novelList">{
        _novelList.map(v =>
            <div className="novelItem" data-nid={v.id} key={v.id} onClick={(e)=>itemClick(v.id)}>
                {/* <img src={v.cover} alt="" style={style} /> */}
                <span>{v.title}</span>
            </div>
        )
    }</div>
};

export default NovelList;