import React,{Component} from 'react';

class Review extends Component{
    constructor(props){
        super(props);
        this.state ={
            price:10
        }
    }
    render(){
        return(
            <div className='review'>
                <h3>{this.props.name}<span>${this.state.price}</span></h3>
                <p>{this.props.body}</p>
            </div>
        );
    }
}
export default Review;