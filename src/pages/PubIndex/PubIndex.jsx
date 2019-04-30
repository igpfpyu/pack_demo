import React , {Component} from 'react';
import {
    Row,
    Col
} from 'antd';
import "./PubIndex_css.less";
import data from './PubIndex_data';
export default class PubIndex extends Component{
    constructor(props){
        super(props);
    }
    checkItem(data){
        let response=data.map(function(item, index){
            let amType='', am_bg="", pmType='', pm_bg="", day='', iDate=new Date(), weekDay="";
            if(iDate.getDay()===(index+1)){
                weekDay="currDay"
            }else if(iDate.getDay()<(index+1)){
                weekDay="staleDay"
            }else{
                weekDay="defaultDay"
            }
            if(item.amType===1){
                amType="未打卡";
                am_bg="am_bg00";
            }else if(item.amType===3){
                amType="迟到";
                am_bg="am_bg01"
            }else if(item.amType===2) {
                amType = "已打卡";
                am_bg = "am_bg02";
            }else{
                amType = "未来";
                am_bg = "";
            }
            if(item.pmType===1){
                pmType="未打卡";
                pm_bg="am_bg00";
            }else if(item.pmType===3){
                pmType="早退";
                pm_bg="am_bg01";
            }else if(item.pmType===2){
                pmType="已打卡";
                pm_bg="am_bg02";
            }else{
                pmType="未来";
                pm_bg="";
            }
            switch (index) {
                case 0: day="周一"; break;
                case 1: day="周二"; break;
                case 2: day="周三"; break;
                case 3: day="周四"; break;
                case 4: day="周五"; break;
            }
            return (
                <dl key={index}>
                    <dt className={weekDay}>{day}</dt>
                    <dd className={am_bg}>{amType}</dd>
                    <dd className={pm_bg}>{pmType}</dd>
                </dl>
            )
        });
        return response;
    }
    render(){
        return (
            <div className="pubIndex">
                <Row gutter={{ xs: 0, sm: 16, md: 24}}>
                    <Col xs={24} sm={18} md={16} lg={16} xl={20}>
                        <div className="check_box">
                            <div className="check_header">
                                <h4>签到记录</h4>
                                <span>{this.dateWeek()}</span>
                            </div>
                            <div className="check_item">
                                {this.checkItem(data.responseBody.checkList)}
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={6} md={8} lg={8} xl={4}>Col</Col>
                </Row>
            </div>
        );
    }
    dateWeek(){
        let time=new Date();
        let mouth=time.getMonth()>=10?time.getMonth():"0"+time.getMonth();
        let date=time.getDate()>=10?time.getDate():"0"+time.getDate();
        return time.getFullYear()+"年"+mouth+"月"+date+"日";
    }
}