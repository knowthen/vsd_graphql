import React from 'react';
import { map } from 'ramda';
import KanbanList from './KanbanList';

const KanbanBoard = ({ lists, boardName }) => {
  if (!lists || lists.length === 0) return null;
  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <h1 className="title is-size-3">{boardName}</h1>
          <div className="columns content">
            {map(
              list => (
                <KanbanList key={list.id} list={list} />
              ),
              lists,
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default KanbanBoard;
