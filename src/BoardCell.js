import React, { Component } from 'react';

class BoardCell extends Component {
    onMove = () => {
        this.props.onMove(this.props.id, "O");
    }

    render() {
        return (
            <div className="game-cell" onClick={this.onMove}>
                {this.props.content}
            </div>
        );
    }
}

export default BoardCell;
