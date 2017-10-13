import './Setup.css';
import React from 'react';

const BOARD_SETUP_OPTIONS = require('../../const.js').BOARD_SETUP_OPTIONS;

let Setup = React.createClass({
    
     handleChange(e) {
         let x = e.target.selectedIndex;
         let val = e.target[x].value;
         this.props.handleSetupChange(val);
     },

     render() {
        let props = this.props;
        let options = BOARD_SETUP_OPTIONS.map(
             (opt, idx) => (<option key={idx} value={idx}>{opt.display}</option>)
        );

        return(
            <div className="setup">
                <label>Board</label>
                <select className="setup__board" 
                    onChange = {this.handleChange}
                >
                    {options}
                </select>
            </div>
        );
    }
});

module.exports = Setup;




