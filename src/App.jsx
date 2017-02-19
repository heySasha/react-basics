import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', null, 'React Todo');
const subtitle = React.createElement('p', { className: 'subtitle' }, 'This is my first app');
const container = React.createElement('div', null, title, subtitle);

ReactDOM.render(container, document.getElementById('root'));