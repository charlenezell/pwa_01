// import React from 'react';
import React, { Component } from 'react';
import style from './css.scss';
import util from '../../util';

// import Selection  from 'react-drag-select';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


class WorkList extends Component {
    shouldComponentUpdate(nextProp) {
        if (this.props.workList !== nextProp.workList) {
            return true;
        } else {
            return false;
        }
    }
    render() {
        let { workList = {}, filter, changeItemStateHandler, tk, changeRankStateHandler, changeVoteStateHandler, showDetail, handleTableSelectEvent } = this.props;
        let list = Object.keys(workList).map(v => workList[v]).sort((a, b) => a._order > b._order ? 1 : -1);
        return <Table className={style.list}
            selectable={false}
            multiSelectable={false}
            onRowSelection={(selectRows) => {
                handleTableSelectEvent(selectRows);
            }}
        >
            <TableHeader className={style.item}
                displaySelectAll={false}
                enableSelectAll={false}
                adjustForCheckbox={false}
            >
                <TableRow
                selectable={false}
                >
                    <TableHeaderColumn className={style.tablerowcolumn}>用户</TableHeaderColumn>
                    {/* <TableHeaderColumn style={{ color: filter.ddId ? 'red' : '' }}>多多号</TableHeaderColumn> */}
                    {/* <TableHeaderColumn>邀请多多号</TableHeaderColumn> */}
                    {/* <TableHeaderColumn>qq</TableHeaderColumn> */}
                    {/* <TableHeaderColumn>名字</TableHeaderColumn> */}
                    <TableHeaderColumn className={style.tablerowcolumn} >投稿类型</TableHeaderColumn>
                    {/* <TableHeaderColumn>头像</TableHeaderColumn> */}
                    {/* <TableHeaderColumn>详情</TableHeaderColumn> */}
                    <TableHeaderColumn className={style.tablerowcolumn}>声音地址</TableHeaderColumn>
                    {/* <TableHeaderColumn>阶段（1=初赛，2=决赛，3=获奖名单）</TableHeaderColumn> */}
                    <TableHeaderColumn className={style.tablerowcolumn} >状态</TableHeaderColumn>
                    <TableHeaderColumn className={style.tablerowcolumn}>票数（阶段1）</TableHeaderColumn>
                    <TableHeaderColumn className={style.tablerowcolumn}>票数（阶段2）</TableHeaderColumn>
                    <TableHeaderColumn className={style.tablerowcolumn}>排名</TableHeaderColumn>
                    {/* <TableHeaderColumn>插入时间</TableHeaderColumn> */}
                    <TableHeaderColumn className={style.tablerowcolumn}>操作</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody
                stripedRows
                showRowHover
                deselectOnClickaway={false}
                displayRowCheckbox={false}
            >
                {/* <Selection> */}
                {
                    list.length > 0 ?
                        list.map(v =>
                            <TableRow className={style.item} data-nid={v.id} key={v.id}>
                                <TableRowColumn className={style.tablerowcolumn}>
                                    <div style={{ padding: "10px 0" }}>
                                        <div><Avatar src={v.avatar} alt="" size={64} /></div>
                                        <div>名字:{v.name}</div>
                                        <div>多多号:{v.ddId}</div>
                                        <div>作品id:{v.id}</div>
                                    </div>
                                </TableRowColumn>
                                {/* <TableRowColumn className={style.tablerowcolumn}></TableRowColumn> */}
                                {/* <TableRowColumn className={style.tablerowcolumn}>{v.inviterDdId}</TableRowColumn> */}
                                {/* <TableRowColumn className={style.tablerowcolumn}>{v.qq}</TableRowColumn> */}

                                <TableRowColumn className={style.tablerowcolumn}>{v.actStoryId}</TableRowColumn>
                                {/* <TableRowColumn className={style.tablerowcolumn}>

                                </TableRowColumn> */}
                                {/* <TableRowColumn className={style.tablerowcolumn}>
                                    <TextField
                                    defaultValue={v.detail}
                                    multiLine
                                    />
                                </TableRowColumn> */}
                                <TableRowColumn className={style.tablerowcolumn}><a href={v.voiceUrl} target="_blank">链接</a></TableRowColumn>
                                {/* <span>{v.stageType}</span> */}
                                <TableRowColumn >
                                    <SelectField
                                        data-itemid={v.id}
                                        value={v.dataStatus}
                                        onChange={(e, index, value) => { e.preventDefault(); changeItemStateHandler(tk, v.id, { dataStatus: value }); }}
                                    >
                                        <MenuItem value={0} primaryText="未审核" />
                                        <MenuItem value={1} primaryText="不通过" />
                                        <MenuItem value={2} primaryText="初赛" />
                                        <MenuItem value={3} primaryText="决赛" />
                                        <MenuItem value={4} primaryText="获奖" />
                                    </SelectField>
                                </TableRowColumn>
                                <TableRowColumn className={style.tablerowcolumn}>
                                    <div>{v.stage1Vote}</div>
                                    <RaisedButton label="编辑" primary={true} onClick={(e) => { e.preventDefault(); changeVoteStateHandler(tk, v.id, 1) }} />
                                </TableRowColumn>
                                <TableRowColumn className={style.tablerowcolumn}>
                                    <div>{v.stage2Vote}</div>
                                    <RaisedButton label="编辑" primary={true} onClick={(e) => { e.preventDefault(); changeVoteStateHandler(tk, v.id, 2) }} />
                                </TableRowColumn>
                                <TableRowColumn className={style.tablerowcolumn}>
                                    <div>{v.rewardRank}</div>
                                    <RaisedButton label="编辑" primary={true} onClick={(e) => { e.preventDefault(); changeRankStateHandler(tk, v.id) }} />
                                </TableRowColumn>

                                {/* <TableRowColumn className={style.tablerowcolumn}>{v.insertTime}</TableRowColumn> */}
                                <TableRowColumn className={style.tablerowcolumn}><RaisedButton label="详情" secondary={true} onClick={() => {
                                    showDetail({
                                        ...v
                                    });
                                }} /></TableRowColumn>
                            </TableRow>
                        ) : (<TableRow><TableRowColumn className={style.tablerowcolumn}>sori,列表为空..</TableRowColumn></TableRow>)
                }
                {/* </Selection> */}
            </TableBody>
        </Table>
    }
}


export default WorkList;