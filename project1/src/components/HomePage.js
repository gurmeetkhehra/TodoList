import React,{Component} from 'react';

class Homepage extends Component{
    state ={
        teachers: ['medo', 'jasmin', 'john', 'mark'],
        new:'',
        theme: false,
    }
    handelInput= (e) => {
        this.setState({new: e.target.value});
        console.log(this.state.teachers);
        console.log('the new state value is '+this.state.new);
    }
    addTeacher = () =>{
        this.setState({
            teacher: this.state.teachers.push(this.state.new)
        });
        this.setState({
            new:''
        })
    }
    
    render(){
        return(
            <div  style={{backgroundColor: this.state.dar ? 'darkgray': 'Lightgray' }}>
                <h1>home page Admin</h1>
                {this.state.teachers ? 'here is the list of out teachers' : 'sorry we donot have teachers now'
                }
                <h4>here is the list of our teachers</h4>

                {this.state.teachers.map((teacher)=>(<li>{teacher}</li>))}

                <input type ='text' placeholder='add a new teacher'
                value={this.state.new}
                onChange={this.handelInput}/>

                <button onClick={this.addTeacher}>Add</button>
            </div>
        );
    }
}
export default Homepage;


// import React from 'react';
// // import Review from './review';

// function Homepage(){
//     return(
//         <div>Homepage</div>
//     );
// }
// export default Homepage;
