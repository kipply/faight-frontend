import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Board from './Board';
import './index.css';

ReactDOM.render(
    (
        <Board columns="7" rows="6" />
    ),
    document.getElementById('root')
);
