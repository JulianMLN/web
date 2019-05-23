import React, {Component} from 'react';
import Axios from 'axios';
import './dashboard.css';
import AddBet from './addbet';
import GetBet from './getbet';
import Auth from './Auth';
import RemoveBet from './removebet';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.refreshPage = this.refreshPage.bind(this);
        }

        refreshPage(){
            this.forceUpdate();
        }


    render() {
        return(
            <div className="dashboard" refreshPage={this.refreshPage}>
                <h1>Dashboard</h1>
                <img src="graph.jpeg"></img>
                <div className="get">
                <h1>List of Bets</h1>
                <table>
                <tr>
                    <td><strong>N°</strong></td>
                    <td><strong>Sport</strong></td>
                    <td><strong>Title</strong></td>
                    <td><strong>Amount</strong></td>
                    <td><strong>Cote</strong></td>
                    <td><strong>P&L</strong></td>
                </tr>
                </table>
                </div>
                <GetBet refreshPage={this.refreshPage}/>
                <AddBet refreshPage={this.refreshPage}/>
                <RemoveBet refreshPage={this.refreshPage}/>
            </div>
        );
    }
}
export default Dashboard;