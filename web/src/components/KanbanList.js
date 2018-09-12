import React from 'react';
import { map } from 'ramda';
import KanbanItem from './KanbanItem';

const KanbanList = ({ list }) => {
  return (
    <div className="column">
      <div className="box has-background-light">
        <p className="box-header has-background-grey-dark has-text-white has-text-weight-bold">
          {list.name}
        </p>
        {map(
          item => (
            <KanbanItem key={item.id} item={item} />
          ),
          list.items,
        )}
      </div>
    </div>
  );
};

export default KanbanList;
