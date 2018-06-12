'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


render(React.createElement(
    'h1',
    { id: 'title',
        className: 'header',
        style: { backgroundColor: 'purple', color: 'white' } },
    'Hello World!'
), document.getElementById('react-container'));
