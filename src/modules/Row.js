import React, { useState } from 'react';
import { PropTypes as T } from 'prop-types';
import Cell from './Cell';

function Row(props) {
  const [row] = useState(props.row);
  const [rowNumber] = useState(props.rowNumber);

  function handleCell(x, y, value) {
    return (<Cell x={x} y={y} value={value} />);
  }

  return (
    <div className="row">
      {row.map((key, index) => handleCell(index, rowNumber, row[index]))}
    </div>
  );
}

Row.propTypes = {
  row: T.arrayOf(T.number).isRequired,
  rowNumber: T.number.isRequired,
};

export default Row;
