const GAME_STATUS = {
    GO: "go",
    PLAYING: "playing",
    WON: "won",
    LOST: "lost"
}

const BOARD_SETUP_OPTIONS = [
    { 
        display: '10 x 5',
        cols: 10,
        rows: 5
    },
    {
        display: '15 x 10',
        cols: 15,
        rows: 10
    },    
    {
        display: '30 x 15',
        cols: 30,
        rows: 15
    },
    
//    {
//        isCustom: true,
//        display: 'custom',
//        cols: 0,
//        rows: 0
//    }
]

module.exports.GAME_STATUS = GAME_STATUS;
module.exports.BOARD_SETUP_OPTIONS = BOARD_SETUP_OPTIONS;