import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Link from '@material-ui/core/Link';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Avatar from '@material-ui/core/Avatar';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {MuiPickersUtilsProvider,KeyboardDatePicker} from "@material-ui/pickers";
import "./style.css"

export class FilterTask extends React.Component {
    constructor(props){
        super(props);
        this.state={responsable:{name:"",email:""},status:"",dueDate:new Date()};
        this.handleResponsable=this.handleResponsable.bind(this);
        this.handlStatus=this.handlStatus.bind(this);
        this.handleDueDate=this.handleDueDate.bind(this);
        this.handleFilter=this.handleFilter.bind(this);
    }
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <form className="layout" onSubmit={this.handleFilter}>
                    <Paper className="paper">
                        <Typography variant="h2">Filter Task</Typography>
                        <Avatar className="avatar">
                            <InboxIcon />
                        </Avatar>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}> 
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date picker dialog"
                                format="MM/dd/yyyy"
                                value={this.state.dueDate}
                                onChange={this.handleDueDate}
                                fullWidth
                                KeyboardButtonProps={{"aria-label": "change date"}}
                            />
                        </MuiPickersUtilsProvider>
                        <FormControl margin="normal" fullWidth>
                            <InputLabel>Responsible</InputLabel>
                            <Input id="Responsable" name="responsible" autoComplete="responsible" value={this.state.Responsable} onChange={this.handleResponsable} />
                        </FormControl>
                        <FormControl margin="normal" fullWidth>
                            <InputLabel>Status (Ready/In Progress/Completed)</InputLabel>
                            <Input id="Responsable" name="estado" autoComplete="estado" value={this.state.estado} onChange={this.handlStatus} />
                        </FormControl>
                        <br/><br/>
                        <Button type="submit" variant="contained" color="primary">Apply</Button>
                        <br/>
                        <Button type="submit" variant="contained" color="primary">Clear All</Button>
                        <br/>
                        <Link href="/Home" variant="body2"> Back </Link>
                    </Paper>
                </form>
            </React.Fragment>
        );
    }

    handleDueDate(date){
        this.setState({dueDate: date });
    };

    handleResponsable(e){
        this.setState({responsable: { name: e.target.value } });
    };
    
    handlStatus(e){
        this.setState({status: e.target.value });
    };
    handleFilter(e){
        e.preventDefault();
        localStorage.setItem("dueDate",this.state.dueDate);
        localStorage.setItem("responsable",this.state.responsable);
        localStorage.setItem("status",this.state.status);
        document.location.href = "/Home";
    };
}