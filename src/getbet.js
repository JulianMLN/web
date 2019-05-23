import React, {Component} from 'react';
import axios from 'axios';
import Auth from './Auth';
import './getbet.css'

class GetBet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bets :[]
        };
    }

    componentWillMount(){
        axios.get('/getbet',{headers: {
            Authorization: "Bearer " + Auth.getToken()
         }}).then((response) => {
            console.log(response.data);
            this.setState({
                bets: response.data
            })
        });
    }

    render(){
        let bets = this.state.bets.map((bet)=>{
            return(
                <div className="gettbet">
                <table>
                <tr>
                    <td>{bet.id}</td>
                    <td>{bet.sport}</td>
                    <td>{bet.title}</td>
                    <td>{bet.amount}</td>
                    <td>{bet.cote}</td>
                    <td>{bet.profit_loose}</td>

                </tr>
                </table>
                </div>
            )
        });
        return(<tbody>{bets} </tbody>);
        
    }
}

export default GetBet;