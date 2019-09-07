// It is always better to name the higher order function name starting with (with)

import React from 'react';

const withClass = (WrappedComponent, className) =>{
    return props => (
        <div className = {className}>
            <WrappedComponent/>
        </div>
    )
}
export default  withClass;