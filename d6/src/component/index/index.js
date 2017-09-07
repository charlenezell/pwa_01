import { Provider ,connect} from 'react-redux';
import React,{render, Component } from 'react';
import WorkList from '../workList/';
import Filter from '../filter/';
import style from './index.scss';
import {changeItemState,editVote} from '../../da'
import { initIndexPageDataSaga ,filterChange,filterInputChange,updataItemStatus} from '../../action';
class Index extends Component {
    componentDidMount() {
        this.props.initPage();
    }
    render() {
        return <div className={style.className}>

            {
                this.props.loading ?
                <div>loading</div> :
                (   <div>
                    <Filter {...this.props}/>
                    <WorkList  {...this.props} />
                </div>
                )
            }

        </div>
    }
}

let Windex=connect((state)=>{
    return {
        workList:state.workList,
        loading:state.fetchFlag,
        filter:state.filter,
        tk:state.token
    }
 },(dispatch,ownProps,hello)=>{
    return {
     initPage:function(){
        dispatch(initIndexPageDataSaga());
     },
     changeFilterHandler:function(e){
        dispatch(filterChange(e));
     },
     valueChangeHandler:function(e){
        dispatch(filterInputChange(e))
     },
     changeItemStateHandler:function(tk,id,data){
        let d=[{id:id,status:data.dataStatus}];
        // [{id:1,status:1,rewardRank:1}]

        changeItemState(tk,JSON.stringify(d)).then(
            v=>{
                if(v.code==0){
                    dispatch(updataItemStatus(id,data.dataStatus,"dataStatus"));
                }
            }
        )
     },
     changeVoteStateHandler:function(tk,id,stageId){
        let c=prompt("票数修改为：");
        if(c.toString().trim()){
            let vote=c.toString().trim();

            editVote(tk,id,stageId,vote).then(
                v=>{
                    if(v.code==0){
                        dispatch(updataItemStatus(id,vote,`stage${stageId}Vote`));
                    }
                }
            )
        }
     },
     changeRankStateHandler:function(tk,id){
        let c=prompt("排名修改为：");
        if(c.toString().trim()){
            let newRank=c.toString().trim();
            let d=[{id:id,rewardRank:newRank}];
            changeItemState(tk,JSON.stringify(d)).then(
                v=>{
                    if(v.code==0){
                        dispatch(updataItemStatus(id,newRank,"rewardRank"));
                    }
                }
            )
        }
     }
    }
 })(Index);

 export default Windex;