import React from 'react';
let style = {
    maxWidth: "100%"
}
const NovelList = ({ novelList = {}, novelItemClick, filterText }) => {
    let _novelList = Object.keys(novelList).map(v => novelList[v]);
    let c = filterText.trim() === "" ? _novelList : _novelList.filter(v => {
        return v.title.includes(filterText);
    });
    return <div className="novelList">{
        c.map(v =>
            <div className="novelItem" data-nid={v.id} key={v.id} onClick={(e) => novelItemClick(v.id)}>
                <img src={v.cover} alt="" style={style} />
                <span>{v.title}</span>
            </div>
            )
    }</div>
};

export default NovelList;