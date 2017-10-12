require('./Game.css');
import {Play} from '../play.js';
let React = require('react');
let Board = require('Board');

const GAME_STATUS = {
    GO: "go",
    PLAYING: "playing",
    WON: "won",
    LOST: "lost"
}

let play = {};

let setNewGame = () => {
    let columns = 10;
    let rows = 5;

    let mines = Math.floor(0.1 * columns * rows + 1);
    play = new Play(columns, rows, mines); 

    return {
        spots: play.spots,
        gameStatus: GAME_STATUS.GO,
        columnCount: columns,
        rowCount: rows,
        mineCount: mines
    }
}

let Game = React.createClass({ 
    getInitialState(){
        return setNewGame();
    },
    
    componentWillMount() {
        let state = this.state;
     },
    
    handleClick(cellKey) {
        let gameStatus = GAME_STATUS.PLAYING;
        play.clearSpot(cellKey);        
        if (play.won()){
            gameStatus = GAME_STATUS.WON;
        } 
        if (play.lost) {
            play.clearAll();
            gameStatus = GAME_STATUS.LOST;
        }
        this.setState({
            spots: play.spots,
            gameStatus: gameStatus
        });
    },
    
    newGame() {
        let state = this.state;
        play = new Play(state.columnCount, state.rowCount, state.mineCount); 
        this.setState({
            spots: play.spots,
            gameStatus: GAME_STATUS.GO
        });       
    }
    ,
    render() {
        let game = this;
        let spots = this.state.spots;
        
        let gameHeaderClassName = "game__header" + " game__header--" + this.state.gameStatus;
        
        let gameRestartClassName = "game__restart" + " game__restart--" + this.state.gameStatus;
        
        return (
            <div className="game">
                <div className={gameHeaderClassName}>
                    {this.state.gameStatus}
                </div>
                <Board 
                    spots={spots}
                    columnCount = {play.width}
                    rowCount = {play.height}
                    handleClick = {this.handleClick}
                    />
                <div className="game__footer">
                    <button 
                        className={gameRestartClassName}
                        onClick = {this.newGame}
                        >
                        Play Again
                    </button>
                </div>
            </div>
        );
    }
});

module.exports = Game;

