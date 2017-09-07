import React ,{Component}from "react";
import style from "./css.scss";
import util from '../../util'
export default class Filter extends Component{

    getPairs(e){
        return {
            name:e.target.getAttribute("name"),
            value:e.target.value
        };
    }
    render(){
        let {
            stageType,
            dataStatus,
            sortType,
            actStoryId,
            ddId
        }=this.props.filter
        return <div className={style.filter} >
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
                this.props.changeFilterHandler(util.parseFormData(e))
                }}>
            <span>
                <label htmlFor="">多多号</label><input type="text" name="ddId" value={ddId} onChange={(e)=>{this.props.valueChangeHandler(this.getPairs(e))}} />
            </span>
            <span>
                <label htmlFor="">阶段</label>
                <select name="stageType" id="" value={stageType} onChange={(e)=>{this.props.valueChangeHandler(this.getPairs(e))}}>
                    <option value="">请选择</option>
                    <option value="1">初赛</option>
                    <option value="2">决赛</option>
                    <option value="3">获奖</option>
                </select>
            </span>
            <span>
                <label htmlFor="">状态</label>
                <select name="dataStatus" id="" value={dataStatus} onChange={(e)=>{this.props.valueChangeHandler(this.getPairs(e))}}>
                    <option value="">请选择</option>
                    <option value="0">未审核</option>
                    <option value="1">不通过</option>
                    <option value="2">初赛</option>
                    <option value="3">决赛</option>
                    <option value="4">获奖</option>
                </select>
            </span>
            <span>
                <label htmlFor="">排序</label>
                <select name="sortType" id="" value={sortType} onChange={(e)=>{this.props.valueChangeHandler(this.getPairs(e))}}>
                    <option value="0">默认</option>
                    <option value="1">按上传时间</option>
                    <option value="2">获奖名次</option>
                    <option value="3">初赛投票数</option>
                    <option value="4">决赛投票数</option>
                </select>
            </span>
            <span>
                <label htmlFor="">作品类型</label>
                <select name="actStoryId" id="" value={actStoryId} onChange={(e)=>{this.props.valueChangeHandler(this.getPairs(e))}}>
                    <option value="">默认</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </span>
            <input type="submit" value="查询" />
            </form>
        </div>
    }
}