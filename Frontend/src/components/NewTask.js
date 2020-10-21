import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Link from '@material-ui/core/Link';
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

export class NewTask extends React.Component {
    constructor(props){
        super(props);
        this.state={descripcion:"",responsable:{name:"",email:""},status:"",dueDate:new Date()};
        this.handleDescripcion=this.handleDescripcion.bind(this);
        this.handleResponsable=this.handleResponsable.bind(this);
        this.handlStatus=this.handlStatus.bind(this);
        this.handleDueDate=this.handleDueDate.bind(this);
        this.handleSumit=this.handleSumit.bind(this);
    }

    render(){
        return (
        <React.Fragment>
            <CssBaseline />
            <form className="layout" onSubmit={this.handleSumit} >
                <Paper className="paper">
                    <Typography variant="h2">New Task</Typography>
                    <Avatar className="avatar">
                        <InboxIcon />
                    </Avatar>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel>Description</InputLabel>
                        <Input id="descripcion" name="description" value={this.state.descripcion} onChange={this.handleDescripcion} />
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel>Responsible</InputLabel>
                        <Input id="Responsable" name="responsible" autoComplete="responsible" value={this.state.descripcion.Responsable} onChange={this.handleResponsable} />
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <InputLabel>Status (Ready/In Progress/Completed)</InputLabel>
                        <Input id="Responsable" name="estado" autoComplete="estado" value={this.state.descripcion.estado} onChange={this.handlStatus} />
                    </FormControl>
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
                    <br/>
                    <br/>
                    <Button type="submit" variant="contained" color="primary">
                        Add
                    </Button>
                    <br/>
                    <Link href="/Home" variant="body2"> back </Link>
                </Paper>
            </form>
        </React.Fragment>
        );
    }
    handleDescripcion(e){
        this.setState({descripcion: e.target.value });
    }
    
    handleResponsable(e){
        this.setState({responsable: { name: e.target.value } });
    };
    
    handlStatus(e){
        this.setState({status: e.target.value });
    };
    
    handleDueDate(date){
        this.setState({dueDate: date });
    };

    handleClose(){
        this.setOpen(false);
    };
    
    handleOpen(){
      this.setOpen(true);
    };
    
    handleSumit(e){
        e.preventDefault();
        if (!this.state.descripcion.length || !this.state.responsable.name.length || !this.state.status.length){
          return;
        }
        if (localStorage.getItem("items") === null) {
          var items = [this.state];
          localStorage.setItem("items", JSON.stringify(items));
        } else {
          let items = JSON.parse(localStorage.getItem("items"));
          items.push(this.state);
          localStorage.setItem("items", JSON.stringify(items));
        }
        document.location.href = "/Home";
    };
}