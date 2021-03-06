import React from "react";
import { Link } from "react-router-dom";

export class AddContact extends React.Component{

    state={
        name:"",
        email:""
    }

    add=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email==="" ){
            alert('Please enter empty field');
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
    }

    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Enter name" value={this.state.name} onChange={(e)=> this.setState({name:e.target.value}) }/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Enter email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}  />
                    </div>
                        
                        <button className="ui button blue">Add</button>

                        <Link to="/">
                            <button className="ui button  blue right ">Contact List</button>
                        </Link>
                </form>
            </div>
        );
    }
}
