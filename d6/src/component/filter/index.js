import React, { Component } from "react";
import style from "./css.scss";
import util from '../../util'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
export default class Filter extends Component {


    render() {
        let _style = {
            width: "7em"
        }
        let {
            stageType,
            dataStatus,
            sortType,
            actStoryId,
            ddId
        } = this.props.filter
        return <form action="" onSubmit={(e) => {
            e.preventDefault();
            this.props.changeFilterHandler({
                stageType,
                dataStatus,
                sortType,
                actStoryId,
                ddId
            })
        }}>
            <Toolbar style={{overflow:"hidden"}}>
                <ToolbarGroup>
                    <TextField
                        floatingLabelFixed
                        name="ddId"
                        floatingLabelText="输入多多号"
                        hintText={"输入多多号"}
                        value={ddId} onChange={(e, value) => {
                            this.props.valueChangeHandler({
                                name: "ddId",
                                value
                            })
                        }}
                    />

                </ToolbarGroup>
                <ToolbarGroup>
                    <SelectField
                        floatingLabelFixed
                        floatingLabelText="阶段"
                        name="stageType"
                        style={_style.selectField}
                        value={stageType}
                        onChange={(e, index, value) => { this.props.valueChangeHandler({ name: "stageType", value }) }}
                    >
                        <MenuItem value={""} primaryText="请选择" />
                        <MenuItem value={1} primaryText="初赛" />
                        <MenuItem value={2} primaryText="决赛" />
                        <MenuItem value={3} primaryText="获奖" />
                    </SelectField>

                    <SelectField
                        floatingLabelFixed
                        floatingLabelText="状态"
                        name="dataStatus"
                        style={_style.selectField}
                        value={dataStatus}
                        onChange={(e, index, value) => { this.props.valueChangeHandler({ name: "dataStatus", value }) }}
                    >
                        <MenuItem value={""} primaryText="请选择" />
                        <MenuItem value={0} primaryText="未审核" />
                        <MenuItem value={1} primaryText="不通过" />
                        <MenuItem value={2} primaryText="初赛" />
                        <MenuItem value={3} primaryText="决赛" />
                        <MenuItem value={4} primaryText="获奖" />
                    </SelectField>

                    <SelectField
                        floatingLabelFixed
                        floatingLabelText="排序"
                        name="sortType"
                        style={_style.selectField}
                        value={sortType}
                        onChange={(e, index, value) => { this.props.valueChangeHandler({ name: "sortType", value }) }}
                    >
                        <MenuItem value={0} primaryText="默认" />
                        <MenuItem value={1} primaryText="按上传时间" />
                        <MenuItem value={2} primaryText="获奖名次" />
                        <MenuItem value={3} primaryText="初赛投票数" />
                        <MenuItem value={4} primaryText="决赛投票数" />
                    </SelectField>

                    <SelectField
                        floatingLabelFixed
                        floatingLabelText="作品类型"
                        name="actStoryId"
                        style={_style.selectField}
                        value={actStoryId}
                        onChange={(e, index, value) => { this.props.valueChangeHandler({ name: "actStoryId", value }) }}
                    >
                        <MenuItem value={""} primaryText="默认" />
                        <MenuItem value={1} primaryText="1" />
                        <MenuItem value={2} primaryText="2" />
                        <MenuItem value={3} primaryText="3" />
                        <MenuItem value={4} primaryText="4" />
                    </SelectField>
                </ToolbarGroup>
                <ToolbarGroup>
                    <RaisedButton label="查询" primary={true} style={style} type="submit" />
                </ToolbarGroup>
            </Toolbar>
        </form>
    }
}