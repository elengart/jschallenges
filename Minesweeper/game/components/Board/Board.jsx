require('./Board.css');
import {Play} from '../play.js';

let React = require('react');
let Field = require('Field');

const BOARD_SETTING = {
    CELL_WIDTH: 20,
    BORDER_WIDTH: 5,
    BOARD_PADDING: 15
}

let Board = React.createClass({ 

    handleClick(cellKey) {
        this.props.handleClick(cellKey);
    },  

    render() {
        let props = this.props;
        let cellWidth = BOARD_SETTING.CELL_WIDTH;
        let borderWidth = BOARD_SETTING.BORDER_WIDTH;
        let boardPadding = BOARD_SETTING.BOARD_PADDING;
        let boardWidth = cellWidth * props.columnCount + borderWidth * 2;
        let boardOuterWidth = boardWidth + (boardPadding + borderWidth) * 2;
        let boardStyle = {
            width: boardWidth
        };  
        let boardOuterStyle = {
            width: boardOuterWidth
        }
        let spots = this.props.spots;
        let cells = spots.map((spot, idx) => (<Field 
                key={idx}        
                cellKey={idx}
                spot={spot} 
                width={cellWidth}
                handleClick = {props.handleClick}
                {...spot}
            />
        ));

        return (
         <div className="board__outer" 
             style={boardOuterStyle}>
            <div className="board" 
                style={boardStyle} >
                {cells}
            </div>
         </div>
        );
    }
});

module.exports = Board;

