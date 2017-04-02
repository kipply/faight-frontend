import React, { Component } from 'react';

class BoardCell extends Component {
    onMove = () => {
        this.props.onMove(this.props.id, "O");
    }

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
            <div className="game-cell" onClick={this.onMove}>
                <div className="cell-inner" style={color}>
                    X
                </div>
            </div>
        );
    }
}

export default BoardCell;
