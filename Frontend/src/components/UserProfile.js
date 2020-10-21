import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link";
import "./style.css"

export class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state ={name:"",email:"",password:"",secondPassword:""};
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this); 
        this.handlePassword = this.handlePassword.bind(this); 
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
        this.handleSave = this.handleSave.bind(this);  
    }
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout" onSubmit={this.handleSave}>
                    <Paper className="paper">
                        <Typography variant="h2">Registration</Typography>
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <form className="form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel>Full name</InputLabel>
                                <Input id="name" name="name" autoComplete="name" value={this.state.name} onChange={this.handleName} autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">username</InputLabel>
                                <Input id="email" name="email" autoComplete="email" value={this.state.email} onChange={this.handleEmail} autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">password</InputLabel>
                                <Input name="password" type="password" id="password" value={this.state.password} onChange={this.handlePassword} autoComplete="current-password" autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">confirm password</InputLabel>
                                <Input name="password" type="password" id="password" value={this.state.secondPassword} onChange={this.handleConfirmPassword} autoComplete="current-password" autoFocus/>
                            </FormControl>
                            <br/>
                            <br/>
                            <Button type="submit" variant="contained" color="primary" className="submit">Save</Button>
                            <br/>
                            <br/>
                            <Link href="/Home" variant="body2"> back </Link>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
    handleName(e) {
        this.setState({ name: e.target.value });
    }
    handleEmail(e) {
        this.setState({ email: e.target.value });
    }
    handlePassword(e) {
        this.setState({ password: e.target.value });
    }
    handleConfirmPassword(e) {
        this.setState({ secondPassword: e.target.value });
    }
    handleSave(e){
        e.preventDefault();
        if (localStorage.getItem("email") !== this.state.email && localStorage.getItem("password") !== this.state.password && this.state.password === this.state.secondPassword){
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('name', this.state.name);
            localStorage.setItem('password', this.state.password);
            localStorage.setItem("isLoggedIn", true);
        }
        document.location.href = "/Home";
    }
}