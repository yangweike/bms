/**
 * Created by jiaowenhui on 2017/3/15.
 */
import React from 'react';
import { connect } from 'react-redux';
import {
  carmapshow_createmap,
  carmapshow_destorymap,
} from '../actions';

class Page extends React.Component {
  componentWillMount () {
    console.log('地图---->componentWillMount---------');
  }
  componentWillUnmount(){
    console.log('地图---->componentWillUnmount---------');
    this.props.dispatch(carmapshow_destorymap());
  }
  componentDidMount () {
    console.log('地图---->componentDidMount---------');
    this.props.dispatch(carmapshow_createmap());
 }
 render() {
     const height = this.props.height || window.innerHeight;
     console.log('地图---->render---------height:'+height);
     return (
         <div className="AdminContent">
             <div id="gaodemap" style={{height:`${height}px`}}/>
         </div>
     );
 }
}

export default connect()(Page);
