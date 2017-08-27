import React from 'react';
import NovelList from 'components/novelList';
import './app.css';


class AppComponent extends React.Component {
  componentDidMount(){
    this.props.initData();
  }
  render() {
    return (
      <div className="index">
        {
          this.props.loading?<div>loading</div>:''
        }
        <NovelList novelList={this.props.novelList} itemClick={this.props.novelItemClick}/>
      </div>
    );
  }
}

export default AppComponent;
