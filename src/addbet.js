import React, {Component} from 'react';
import Axios from 'axios';
import './addbet.css';
import Auth from './Auth';

class AddBet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            sport: '',
            title: '',
            amount: 0.0,
            cote: 0.0,
            profit_loose: 0.0,

        }
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeSport = this.handleChangeSport.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
        this.handleChangeCote = this.handleChangeCote.bind(this);
        this.handleChangePL = this.handleChangePL.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangeDate(event) {
        this.setState({date: event.target.value});
    }
    handleChangeSport(event) {
        this.setState({sport: event.target.value});
    }
    handleChangeTitle(event) {
        this.setState({title: event.target.value});
    }
    handleChangeAmount(event) {
        this.setState({amount: event.target.value});
    }
    handleChangeCote(event) {
        this.setState({cote: event.target.value});
    }
    handleChangePL(event) {
        this.setState({profit_loose: event.target.value});
    }


    handleSubmit(event) {
        alert('A data was submitted: ' + this.state.date +' - '+ this.state.sport +' - '+ this.state.title +' - '+ this.state.amount +' - '+ this.state.cote +' - '+ this.state.profit_loose);
        event.preventDefault();
    
        const {date,sport,title,amount,cote,profit_loose} = this.state;
            
        console.log({date,sport,title,amount,cote,profit_loose});
        console.log(Auth.getToken());
        // Send a post request
        Axios.post('/addbet',{date,sport,title,amount,cote,profit_loose},{headers: {
            Authorization: "Bearer " + Auth.getToken()
         }}).then((result)=>{
            //access results
            console.log(result);
        });


        /*{headers: {
            Authorization: "Bearer " + Auth.getToken()
         }}*/
        
       /* Axios.post('/addbet',{date,sport,title,amount,cote,profit_loose}
         ).then((response) => {
            console.log(response.data);
        });*/
        
      }

    render() {
        return(
            <div className="betform">
                <h1>Add a new Bet</h1>
                <form onSubmit={this.handleSubmit}>
                <label>Betting Title :
                <input type="text" value={this.state.title} onChange={this.handleChangeTitle} placeholder="Title of Bet"required/><br/>
                </label>
                <label>Type of sport :
                <input type="text" value={this.state.sport} onChange={this.handleChangeSport} placeholder="Sport"required/><br/>
                </label>
                <label>Betting Date:
                <input type="date" onChange={this.handleChangeDate} placeholder="Date" required/><br/>
                </label>
                <label>Amount of betting :
                <input type="number" onChange={this.handleChangeAmount} placeholder="Amount of betting" required/><br/>
                </label>
                <label>Cote of betting :
                <input type="number" onChange={this.handleChangeCote} placeholder="Cote" required/><br/>
                </label>
                <label>Amount of Profit or Loose :
                <input type="number"  onChange={this.handleChangePL} placeholder="Profit or Loose" required/><br/>
                </label>
                <input type="submit" value="Submit" />
                </form>
          </div>
        );
    }
}
export default AddBet;