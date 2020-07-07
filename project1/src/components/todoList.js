import React from 'react';

class Todo extends React.Component{
    state={
        todos:['learning react', 'learn js', 'learn css'],
        inputValue:''
    }
    handelInput = (e)=>{
        this.setState({inputValue: e.target.value})
    }
    handelAdd =()=>{
        this.setState({
            todos: [...this.state.todos, this.state.inputValue]
        });
        this.setState({inputValue:''})
    }
    handelDel=(value)=>{
        const updatedTodos= [...this.state.todos]
        updatedTodos.splice(value,1);
        this.setState({todos: updatedTodos})
        // console.log(this.state.todos[index])
    }
    render(){
        return(
            <div>
            <h1>TodoList</h1>
            <br></br>

            <input type='text' placeholder='Add Todo' onChange={this.handelInput} 
            value={this.state.inputValue}/>
            <button onClick={this.handelAdd}>Add</button>
            <ul>
                {this.state.todos.map(
                    (item,index)=> <li key={index}>
                        {item}
                        <button onClick={()=>this.handelDel(index)}>x</button>
                    
                        </li>
                )}
            </ul>
            </div>
        );
    }
}
export default Todo;