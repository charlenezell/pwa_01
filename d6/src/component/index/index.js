import { Provider, connect } from 'react-redux';
import React, { render, Component } from 'react';
import WorkList from '../workList/';
import Filter from '../filter/';
import style from './index.scss';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import { changeItemState, editVote } from '../../da'
import CircularProgress from 'material-ui/CircularProgress';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Snackbar from 'material-ui/Snackbar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { initIndexPageDataSaga, filterChange, filterInputChange, updataItemStatus, showDetail, hideDetail, pageChange, tableSelectChange, hideSystemInfo } from '../../action';
import ReactPaginate from 'react-paginate';
class Index extends Component {
    componentDidMount() {
        this.props.initPage();
    }
    render() {
        return <div className={style.className}>
            <div>
                <Paper className={style.top} zDepth={1}>
                    <Filter {...this.props} />
                    <div id="react-paginate">
                        {this.props.selectedItem.length > 0 ?
                            <SelectField
                                floatingLabelText="批量修改选中项目状态"
                                value={-1}
                                onChange={(e, index, value) => { e.preventDefault(); this.props.showBatchAction()  }}
                            >
                                <MenuItem value={-1} primaryText="请选择" />
                                <MenuItem value={0} primaryText="未审核" />
                                <MenuItem value={1} primaryText="不通过" />
                                <MenuItem value={2} primaryText="初赛" />
                                <MenuItem value={3} primaryText="决赛" />
                                <MenuItem value={4} primaryText="获奖" />
                            </SelectField>
                            : ''}
                        <ReactPaginate previousLabel={"上一页"}
                            nextLabel={"下一页"}
                            breakLabel={<span>...</span>}
                            breakClassName={"break-me"}
                            pageCount={this.props.workListStatus.totalPage}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={(a) => { this.props.pageChange(a) }}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"} />
                    </div>
                </Paper>
                <div className={style.bottom}>
                    {
                        this.props.loading ?
                            <CircularProgress style={{ margin: "100px auto", display: "block" }} /> : <WorkList  {...this.props} />
                    }
                </div>
                <Dialog
                    title={this.props.detailDialog.title}
                    modal={false}
                    open={this.props.detailDialog.show}
                    onRequestClose={this.props.hideDetail}
                    autoScrollBodyContent
                >
                    <div>
                        <div><TextField
                            floatingLabelFixed
                            floatingLabelText="邀请人多多号"
                            value={this.props.detailDialog.content.inviterDdId}
                            disabled
                        /></div>
                        <div><TextField
                            floatingLabelFixed
                            floatingLabelText="QQ"
                            value={this.props.detailDialog.content.qq}
                            disabled
                        /></div>
                        <div><TextField
                            floatingLabelFixed
                            floatingLabelText="详情"
                            multiLine
                            value={this.props.detailDialog.content.detail}
                            disabled
                            fullWidth
                        /></div>
                        <div><TextField
                            floatingLabelFixed
                            floatingLabelText="插入时间"
                            value={this.props.detailDialog.content.insertTime}
                            disabled
                        />
                        </div>
                    </div>
                </Dialog>
                <Snackbar
                    open={this.props.systemInfo.show}
                    message={this.props.systemInfo.content}
                    autoHideDuration={2000}
                    onRequestClose={() => {
                        this.props.hideSystemInfo();
                    }}
                />
            </div>
        </div>
    }
}

let Windex = connect((state) => {
    return {
        workList: state.workList,
        loading: state.fetchFlag,
        filter: state.filter,
        tk: state.token,
        detailDialog: state.detailDialog,
        systemInfo: state.systemInfo,
        workListStatus: state.workListStatus,
        selectedItem: state.selectedItem
    }
}, (dispatch) => {
    return {
        initPage: function () {
            dispatch(initIndexPageDataSaga());
        },
        changeFilterHandler: function (e) {
            dispatch(filterChange(e));
        },
        valueChangeHandler: function (e) {
            dispatch(filterInputChange(e))
        },
        changeItemStateHandler: function (tk, id, data) {
            let d = [{ id: id, status: data.dataStatus }];
            // [{id:1,status:1,rewardRank:1}]

            changeItemState(tk, JSON.stringify(d)).then(
                v => {
                    if (v.code == 0) {
                        dispatch(updataItemStatus(id, data.dataStatus, "dataStatus"));
                    } else {
                        alert(v.detail)
                    }
                }
            )
        },
        changeVoteStateHandler: function (tk, id, stageId) {
            let c = prompt("票数修改为：");
            if (c&&c.toString().trim()) {
                let vote = c.toString().trim();

                editVote(tk, id, stageId, vote).then(
                    v => {
                        if (v.code == 0) {
                            dispatch(updataItemStatus(id, vote, `stage${stageId}Vote`));
                        } else {
                            alert(v.detail)
                        }
                    }
                )
            }
        },
        changeRankStateHandler: function (tk, id) {
            let c = prompt("排名修改为：");
            if (c&&c.toString().trim()) {
                let newRank = c.toString().trim();
                let d = [{ id: id, rewardRank: newRank }];
                changeItemState(tk, JSON.stringify(d)).then(
                    v => {
                        if (v.code == 0) {
                            dispatch(updataItemStatus(id, newRank, "rewardRank"));
                        } else {
                            alert(v.detail)
                        }
                    }
                )
            }
        },
        showDetail: function (data) {
            dispatch(showDetail(data));
        },
        hideDetail: function () {
            dispatch(hideDetail());
        },
        pageChange: function (e) {
            dispatch(pageChange(e));
        },
        showBatchAction: function () {
            console.log("hello")
        },
        handleTableSelectEvent: function (e) {
            dispatch(tableSelectChange(e))
        },
        hideSystemInfo: function () {
            dispatch(hideSystemInfo());
        }
    }
})(Index);

export default Windex;