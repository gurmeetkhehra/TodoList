import React,{Component} from 'react';

class Login extends Component {
    state = 
    {
        email: '',
        password: ''
    }

    handelEmail = (e) => {
        this.setState({
            email: e.target.value
        })
        // console.log(this)
        // console.log(e);
    }
    handelPassword(e){
        this.setState({
            password: e.target.value
        })
        // console.log(this)
        // console.log(e);
    }
    componentDidMount(){
        alert('welcome to my website')
    }
    componentDidUpdate(){
        console.log('you update something');
        
    }

    render(){
        return(
            <div>
               
                <h4 style={{margininBottom:30}}>Login page</h4>
                <br></br>
                <form>
                <input className='input-text'  value={this.state.email} type='text' onChange={this.handelEmail} onClick={this.handelEmail} placeholder='enter email'/>
                <br></br>
                <input className='input-password' value={this.state.password}  type='password' onClick={this.handelPassword} placeholder='enter password'/>
                {/* <input className='input-password' value={this.state.password}  type='password' onChange={this.handelPassword.bind(this)} placeholder='enter password'/> */}
                <br></br>
                <button>log in</button>
                </form>
            </div>
        );
    }
}
export default Login;
