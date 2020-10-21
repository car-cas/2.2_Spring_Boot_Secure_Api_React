import React from "react";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Card from "@material-ui/core/Card";
import {CardContent, CssBaseline, Typography} from "@material-ui/core";

export class CardTask extends React.Component{
    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <main className="layout">
                    <Card>
                        <CardContent>
                            <div className="gridCard">
                                <div>
                                    <Typography variant="h6">
                                        {this.props.descripcion}  
                                        {this.props.status === 'In Progress' ? <InboxIcon alt="progress"/> : <div/>}
                                        {this.props.status === 'Ready' ? <InboxIcon alt="ready"/> : <div/>}
                                        {this.props.status === 'Completed' ? <InboxIcon alt="completed"/> : <div/>}
                                    </Typography>
                                </div>
                            </div>
                            <Typography variant="h6">
                                {this.props.status} - {new Date(this.props.dueDate).toLocaleDateString()}
                            </Typography>
                            <Typography variant="h6">
                                {this.props.name}  
                            </Typography>
                        </CardContent>
                    </Card>
                </main>
            </React.Fragment>
        );
    }
}