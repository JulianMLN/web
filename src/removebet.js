import React, {Component} from 'react';
import Axios from 'axios';
import './removebet.css';
import Auth from './Auth';

class RemoveBet extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id : 0,
        }

        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeId(event) {
        this.setState({id: event.target.value});
    }

    handleSubmit(event) {
        alert('A data was submitted: ' + this.state.id);
        event.preventDefault();
    
        const {id} = this.state;
        console.log({id});
        console.log(Auth.getToken());
        // Send a post request
        Axios.post('/removebet',{id},{headers: {
            Authorization: "Bearer " + Auth.getToken()
         }}).then((result)=>{
            //access results
            console.log(result);
        });
    }

        render() {
            return(
                <div className="removebet">
                    <h1>Remove a Bet</h1>
                    <form onSubmit={this.handleSubmit}>
                    <label>Number of the bet to remove :
                    <input type="number" onChange={this.handleChangeId} placeholder="Number of Bet to remove" required/><br/>
                    </label>
                    <input type="submit" value="Submit" />
                    </form>
              </div>
            );
        }
}

export default RemoveBet;