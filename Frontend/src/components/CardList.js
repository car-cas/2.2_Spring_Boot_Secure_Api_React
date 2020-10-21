import React from "react";
import { CardTask } from "./CardTask";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

export class CardList extends React.Component {
  render() {
    const cardList = this.props.cardList.map((cardTask, i) => {
      return (
        <GridListTile key={i}>
          <CardTask
            key={i}
            descripcion={cardTask.descripcion}
            name={cardTask.responsable.name}
            dueDate={cardTask.dueDate}
            status={cardTask.status}
          />
        </GridListTile>
      );
    });

    return (
      <div className="root">
        <GridList cellHeight={160} className="gridList" cols={1}>
          {cardList}
        </GridList>
      </div>
    );
  }
}