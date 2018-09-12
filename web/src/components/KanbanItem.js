import React from 'react';
import { map, pathOr } from 'ramda';
import KanbanItemComment from './KanbanItemComment';

const KanbanItem = ({ item }) => {
  const commentCount = pathOr(0, ['comments', 'length'], item);
  return (
    <div className="box">
      <article>
        <h5 className="item-name">{item.name}</h5>
        {commentCount > 0 ? (
          <div className="comment-label">
            <em>comments</em>
          </div>
        ) : null}
        {map(
          comment => (
            <KanbanItemComment key={comment.id} comment={comment.body} />
          ),
          item.comments,
        )}
      </article>
    </div>
  );
};

export default KanbanItem;
