import React from 'react';
let style = {
    maxWidth: "100%"
}
const RecommandList = ({ qqRecommandList = {}, filterText }) => {
    let list = Object.keys(qqRecommandList).map(v => qqRecommandList[v]);
    let c = filterText.trim() === "" ? list : list.filter(v => {
        return v.content.title.includes(filterText);
    });
    return <div className="novelList">{
        c.map(v =>
            <div className="novelItem" data-nid={v.id} key={v.id}>
                <img src={v.content.img} alt="" style={style} />
                <span>{v.content.title}</span>
                <span>{v.userInfo.newUserName}</span>
            </div>
            )
    }</div>
};

export default RecommandList;