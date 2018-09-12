import React from 'react';

const Loading = props => {
  return (
    <div className="columns is-centered is-vcentered">
      <div className="column is-narrow has-text-centered">
        <span className="icon is-size-1 center">
          <i className="fas fa-spinner fa-spin" />
        </span>
      </div>
    </div>
  );
};

export default Loading;
