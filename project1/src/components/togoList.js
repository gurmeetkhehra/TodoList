import React, {Component} from 'react';

class Togo extends Component{
    constructor(props){
        super(props);
        
        this.state={
            newItem:"",
            list:[]
        }
    }
    updateInput(value){
        //update react state
        this.setState({
            newItem:value
            //UpdateInput is function too update state newitem with input value.
            
        });
        console.log(this.state.newItem);
    }
    addItem(){
        //create item with unique id
        const newItem={
            // id: 1 + Math.random(),

            value:this.state.newItem.slice()
        };
        //copy of current list of items
        const list =[...this.state.list];

        //add new item to list
        list.push(newItem);

        // update state with new list and reset newItem input
        this.setState({
            list,
             newItem:""
        });
    }
    deleteItem(i){
        //copy current list of items
        const list = [...this.state.list];

        //filter out item being deleted
        // const updatedList = list.filter(item => item !== item[i]);
        list.splice(i, 1);

        this.setState({list});
    }

    render(){
        return(
            <div>
                <h1 className="app-title">My List</h1>
           
            <div className="container">
                <div
                          style={{
                            padding: 20,
                            textAlign: "left",
                            maxWidth: 500,
                            margin: "auto"
                          }}
                          >
                    Add an Item...
                    <br></br>

                    <input
                    type="text"
                    placeholder="Type item here..."
                    value={this.state.newItem}
                    onChange={e => this.updateInput (e.target.value)}
                    />
                    <button
                    className="add-btn btn-floating"
                     onClick={() => this.addItem()}>Add</button>

                    <ul>
                        {this.state.list.map((item,index) =>{
                            return(
                                <li key={index}>
                                    {item.value}
                                    <button
                                    className="add-btn btn-floating"
                                    onClick={() => this.deleteItem(index)}
                                    >
                                    X
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>
    </div>
        )
    }
}
 export default Togo;