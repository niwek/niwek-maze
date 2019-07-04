import React, { useState } from 'react';
import { PropTypes as T } from 'prop-types';

function Cell(props) {
  const [value] = useState(props.value);

  return (
    <div className="square">
      {value}
    </div>
  );
}

Cell.propTypes = {
  value: T.string.isRequired,
};

export default Cell;
