import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import "./style.css"
import axios from 'axios';

export class Login extends React.Component{
    constructor(props){
        super(props);
        this.state ={email:"",password:"",IsLoggedIn:false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout" onSubmit={this.handleSubmit}>
                    <Paper className="paper">
                        <Typography variant="h2">Task Planner</Typography>
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">username</InputLabel>
                                <Input id="email" name="email" autoComplete="email"  value = {this.state.email} onChange = {this.handleUser} autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">password</InputLabel>
                                <Input name="password" type="password" id="password" autoComplete="current-password" value = {this.state.password} onChange = {this.handlePass} autoFocus />
                            </FormControl>
                            <br/>
                            <br/>
                            <Button type="submit" fullWidth variant="contained" color="primary" className="submit">Login</Button>
                            <br/>
                            <br/>
                            <Link href="./UserProfile" variant="body2"> Create Account </Link>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
    handleUser(user){
        this.setState({email: user.target.value});
    }
    handlePass(pass){
        this.setState({password: pass.target.value});
    }
    handleSubmit(){
        if (localStorage.getItem("email") === this.state.email && localStorage.getItem("password") === this.state.password || (localStorage.getItem("token")!=null)){
            localStorage.setItem("isLoggedIn", true);
            this.props.handleLogin();
        }
    }

    componentDidMount(){
        this.handleLogin().then(()=>{
            this.setState({login:true})
        }
        );
    }
    
    handleLogin(){
        const p = new Promise((resolve) =>{
            axios.post('http://localhost:8080/user/login', {
             email: 'test@mail.com',
             password: 'password'
             },
             {headers:{"Content-ype":"application/json"}})
             .then(function (response) {
                 localStorage.setItem('token',response.data.accessToken);
                 localStorage.setItem("IsLoggedIn",true);
                 localStorage.setItem("username","test");
                 localStorage.setItem("email",this.state.email);
                 resolve();
                 
             })
             .catch(function (error) {
                console.log(error);
             });

        });
        return p;
    }
}