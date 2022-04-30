import React from 'react';

const Hello = ({name, color, isBold}) => (
    <div style={{color: color}}>
            {/* {isBold ? <b>*</b> : null} */}
            {isBold && <b>*</b>}
        {name}
        </div>
)

Hello.defaultProps = {
    name: '익명',
    color: 'gray',
  }

export default Hello