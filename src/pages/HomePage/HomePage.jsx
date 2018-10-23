import  React, {Component} from 'react';
import {
    Button
} from 'antd';
import './HomePage_css.less';
export default class HomePage extends Component {
   render(){
       return (
           <div className="main_bg">
               <Button type="primary">primary</Button>
               <div className="box"></div>
           </div>
       );
   }
}