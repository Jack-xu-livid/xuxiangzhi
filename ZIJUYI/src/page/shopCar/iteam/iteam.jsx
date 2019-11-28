import React from "react";
import "./iteam.less"
export default class Iteam extends React.Component{
    constructor(){
        super();
        this.state={
            commentState:0
        }
    };
    componentDidMount(){
        this.setState({
            commentState:this.props.data.commentState
        })
    };
    commentHandler =()=>{
        this.setState({
            commentState:1
        })
    };

    submitCommentHandler(){
        this.setState({
            commentState:2
        })
    };

    hideComment(){
        this.setState({
            commentState:0
        })
    };
    render(){
        let data =this.props.data
        console.log(data)
        console.log(data.img)
        return(
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={data.img} />
                </div>
                <div className="order-item-comment float-right">
                     {
                        this.state.commentState === 0 ? 
                            <button className="btn" onClick={this.commentHandler}>评价</button>
                            : this.state.commentState === 1? '':
                                <button className="btn unseleted-btn">已评价</button>
                    } 
                </div>
                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>类型：{data.houseType}</span>
                    <span>价格：￥{data.price}</span>
                </div>
                {/* 评价视图部分 */}
                {
                    this.state.commentState === 1 ?
                    <div className="comment-text-container">
                        <textarea style={{ width: '100%', height: '80px' }} className="comment-text" ref={this.commentText}></textarea>
                        <button className="btn" onClick={this.submitCommentHandler.bind(this)}>提交</button>
                        <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                    </div>
                    : ""
                }
            </div>
        )
    }
}