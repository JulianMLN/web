import React, {Component} from 'react';
import Axios from 'axios';
import Auth from './Auth';
import './login.css'

class Login  extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '',password:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
          this.setState({[event.target.name]: event.target.value});
      }

      handleSubmit(event) {
        event.preventDefault();
        const {name,password} = this.state;
        // Send a post request
        
        Axios.post('/login',{name,password}).then((response)=>{
            // access response
            console.log('Result:',response);
            // save the token
            Auth.authenticateUser(response.data.token);
            console.log('token:',Auth.getToken());
            this.setState({name:'',password:''});
            //windows.location.reload();
            this.props.refreshPage();
        },
        (error)=>{
          console.log(error);
        });
      }
    
      render() {
        return (
          
          <div className="loginform">
          <h1>Sign In</h1>
          <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.name} onChange={this.handleChange} placeholder="User" name="name" required/><br/>
              <input type="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" name="password" required/><br/>
            <input type="submit" value="Submit" /><br/>
          </form>
          </div>
        );
      }
}

export default Login;