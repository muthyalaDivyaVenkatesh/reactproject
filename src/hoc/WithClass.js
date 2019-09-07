// It is always better to name the higher order function name starting with (with)

import React from 'react';

const withClass = props => (
    <div className = {props.classes}>{props.children}</div>
);

export default  withClass;