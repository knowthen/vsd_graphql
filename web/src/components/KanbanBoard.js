import React from 'react';
import { map } from 'ramda';
import KanbanList from './KanbanList';

const KanbanBoard = ({ lists }) => {
  if (!lists || lists.length === 0) return null;
  return (
    <section className="section">
      <div className="container">
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
  );
};
export default KanbanBoard;
