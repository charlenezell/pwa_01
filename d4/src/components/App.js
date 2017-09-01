import React from 'react';
import NovelList from 'components/novelList';
import RecommandList from 'components/recommandList';
import SearchBar from 'containers/searchBar';
import Infinite from 'react-infinite';
import style from './app.css';


export default (props) => <div className={style.className}>
  {
    props.loading ? <div>loading</div> : ''
  }
  {/* <SearchBar /> */}
  <Infinite containerHeight={500} elementHeight={40}>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  <div className="one">123</div>
  </Infinite>
  {/* <RecommandList  {...props} /> */}
  {/* <NovelList  {...props} /> */}
</div>
