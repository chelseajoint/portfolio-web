import React from 'react';

import './Block.scss';

const Block = ({ color }) => {
    return <div className={`block ${color}`}></div>;
}

export default Block;
