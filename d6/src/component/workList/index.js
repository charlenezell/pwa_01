// import React from 'react';
import React, { Component } from 'react';
import style from './css.scss';
import util from '../../util';
const afterSelect = (selectedTargets) => {
    const hasSelected = selectedTargets.length
}
const WorkList = ({ workList = {}, filterText = "", changeItemStateHandler, tk, changeRankStateHandler, changeVoteStateHandler }) => {
    let list = Object.keys(workList).map(v => workList[v]).sort((a, b) => a._order > b._order ? 1 : -1);
    return <table className={style.list} >
        <tr className={style.item} style={{ "fontWeight": "bold" }}>
            <td>id</td>
            <td>多多号</td>
            <td>邀请多多号</td>
            <td>qq</td>
            <td>名字</td>
            <td>投稿类型</td>
            <td>头像</td>
            <td>详情</td>
            <td>声音地址</td>
            {/* <td>阶段（1=初赛，2=决赛，3=获奖名单）</td> */}
            <td>状态（0=未审核，1=不通过，2=初赛，3=决赛，4=获奖）</td>
            <td>票数（阶段1）</td>
            <td>票数（阶段2）</td>
            <td>排名</td>
            <td>插入时间</td>
        </tr>

            {
                list.length > 0 ?
                    list.map(v =>
                        <tr className={style.item} data-nid={v.id} key={v.id}>
                            <td>{v.id}</td>
                            <td>{v.ddId}</td>
                            <td>{v.inviterDdId}</td>
                            <td>{v.qq}</td>
                            <td>{v.name}</td>
                            <td>{v.actStoryId}</td>
                            <td><img src="{v.avatar}" alt="" /></td>
                            <td>{v.detail}</td>
                            <td>{v.voiceUrl}</td>
                            {/* <span>{v.stageType}</span> */}
                            <td className={style.clickable}>
                                <form data-itemid={v.id} action="" onChange={(e) => { e.preventDefault(); changeItemStateHandler(tk, e.currentTarget.dataset.itemid, util.parseFormData(e)); }}>
                                    <input type="radio" name="dataStatus" id={v.id + "__dataStatus0"} value="0" checked={v.dataStatus == '0'} /><label htmlFor={v.id + "__dataStatus0"} >未审核</label>
                                    <input type="radio" name="dataStatus" id={v.id + "__dataStatus1"} value="1" checked={v.dataStatus == '1'} /><label htmlFor={v.id + "__dataStatus1"} >不通过</label>
                                    <input type="radio" name="dataStatus" id={v.id + "__dataStatus2"} value="2" checked={v.dataStatus == '2'} /><label htmlFor={v.id + "__dataStatus2"} >初赛</label>
                                    <input type="radio" name="dataStatus" id={v.id + "__dataStatus3"} value="3" checked={v.dataStatus == '3'} /><label htmlFor={v.id + "__dataStatus3"} >决赛</label>
                                    <input type="radio" name="dataStatus" id={v.id + "__dataStatus4"} value="4" checked={v.dataStatus == '4'} /><label htmlFor={v.id + "__dataStatus4"} >获奖</label>
                                </form>
                            </td>
                            <td data-itemid={v.id} className={style.clickable} onClick={(e) => { e.preventDefault(); changeVoteStateHandler(tk, e.currentTarget.dataset.itemid, 1) }}>{v.stage1Vote}</td>
                            <td data-itemid={v.id} className={style.clickable} onClick={(e) => { e.preventDefault(); changeVoteStateHandler(tk, e.currentTarget.dataset.itemid, 2) }}>{v.stage2Vote}</td>
                            <td data-itemid={v.id} className={style.clickable} onClick={(e) => { e.preventDefault(); changeRankStateHandler(tk, e.currentTarget.dataset.itemid) }}>{v.rewardRank}</td>
                            <td>{v.insertTime}</td>
                        </tr>
                    ) : (<tr><td>sori,列表为空..</td></tr>)
            }
        </table>
};

export default WorkList;