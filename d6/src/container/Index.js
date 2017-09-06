import  {
  Component
} from 'react';

import {
  connect
} from 'react-redux';

import {
  initIndexPageDataSaga,
  removeItem
} from '../actions/';

import Main from '../components/App';

function mapStateToProps(state) {
  const props = {
    // novelList:state.novelList,
    qqRecommandList:state.qqRecommandList,
    loading:state.fetchFlag,
    filterText:state.filterText
  };
  return props;
}

function mapDispatchToProp(dispatch){
  return {
    novelItemClick:function(e){
      dispatch(removeItem(e))
    },
    initPage:function(){
      dispatch(initIndexPageDataSaga());
    }
  }
}

class AppContainer extends Component{
  componentDidMount(){
    this.props.initPage();
  }
  render(){
    return <Main {...this.props} />
  }
}
export default connect(mapStateToProps,mapDispatchToProp)(AppContainer);
