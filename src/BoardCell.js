import React, { Component } from 'react';

class BoardCell extends Component {
    render() {
        let color = {
            backgroundColor: 'white'
        };
        if(this.props.content === 'X') {
            color.backgroundColor = 'red';
        } else if(this.props.content === 'O'){
            color.backgroundColor = 'yellow';
        }
        return (
            <div className="game-cell">
                <div className="cell-inner" style={color}>
                    
                </div>
            </div>
        );
    }
}

export default BoardCell;
