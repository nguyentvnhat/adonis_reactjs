import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <p>I'm an example component!</p>
    );
}

export default Example;

if (document.getElementById('component-example')) {
    ReactDOM.render(<Example />, document.getElementById('component-example'));
}