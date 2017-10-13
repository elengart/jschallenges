require('./Game.css');
import {Play} from '../play.js';
let React = require('react');
let Board = require('Board');
let Setup = require('Setup');
let consts = require('../../const.js');
const GAME_STATUS = consts.GAME_STATUS;
const BOARD_SETUP_OPTIONS = consts.BOARD_SETUP_OPTIONS;


let play = {};

let setNewGame = (c, r) => {
    let columns = c || 10;
    let rows = r || 5;

    let mines = Math.floor(0.1 * columns * rows + 1);
    play = new Play(columns, rows, mines); 

    return {
        spots: play.spots,
        gameStatus: GAME_STATUS.GO,
        columnCount: columns,
        rowCount: rows,
        mineCount: mines,
        showSetup: false
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
    
    handleSetupChange(optionKey) {
        let opt = BOARD_SETUP_OPTIONS[optionKey];
        if (opt && !opt.isCustom) {
            this.setState( setNewGame(opt.cols, opt.rows))
        }
    },
    
    newGame(){
        let state = this.state;
        play = new Play(state.columnCount, state.rowCount, state.mineCount); 
        this.setState({
            spots: play.spots,
            gameStatus: GAME_STATUS.GO
        });       
    },
    
    render() {
        let game = this;
        let spots = this.state.spots;
        let gameStatus = this.state.gameStatus;      
        let gameClassName = `game game--${gameStatus}`; 
        let buttonText = 'Play again';
        if (gameStatus === GAME_STATUS.PLAYING) {
            buttonText = 'Restart';
        }
             
        return (
            <div className={gameClassName}>
                <div className="game__header">
                    <Setup handleSetupChange = {this.handleSetupChange} />
                    <div className="game__status">{gameStatus}</div>
                </div>
                <Board 
                    spots={spots}
                    columnCount = {play.width}
                    rowCount = {play.height}
                    handleClick = {this.handleClick}
                    />
                <div className="game__footer">
                    <button 
                        className="game__restart"
                        onClick = {this.newGame}
                        >
                        {buttonText}
                    </button>
                </div>
            </div>
        );
    }
});

module.exports = Game;

