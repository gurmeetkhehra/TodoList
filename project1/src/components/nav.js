import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component{
    render(){
        return(
            <div className='nav-bar'>
                <h1>Logo</h1>
                <ul className='right-nav'>
                <li><Link to='/'>HomePage</Link></li>
                <li><Link to='/reactcourse'>reactcourse</Link></li>
                <li><Link to='/csscourse'>csscourse</Link></li>
                <li><Link to='/login'>login</Link></li>

                <li><Link to='/todo'>Todo</Link></li>
                <li><Link to='/togo'>Togo</Link></li>
                
               
                
                </ul>
            </div>
        );
    }
} 
export default Nav;