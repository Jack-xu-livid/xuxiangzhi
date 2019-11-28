import React from "react";
import SwipeableViews from 'react-swipeable-views';
import "../lunbo/lunbo.less";
import Dian from "./diandian/diandian";
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)
export default class LBT extends React.Component{
    constructor(){
        super();
        this.state={
            nowIndex:0
        }
    };
    getIndex=(index)=>{
        this.setState({
            nowIndex:index
        })
    }
    render(){
        return(
            <div className='swiper'>
                <AutoPlaySwipeableViews   direction="incremental" onChangeIndex={this.getIndex}>
                    {this.props.banner.map((ele,index)=>{
                        return <img src={ele} key={index} alt=""/>
                    })}
                </AutoPlaySwipeableViews>
                <Dian count={this.props.banner.length} cur={this.state.nowIndex}  />
                
            </div>
        )
    }
}