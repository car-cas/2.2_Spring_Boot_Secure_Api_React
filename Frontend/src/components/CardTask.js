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
                                        {this.props.status === 'In Progress'}
                                        {this.props.status === 'Ready'}
                                        {this.props.status === 'Completed'}
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