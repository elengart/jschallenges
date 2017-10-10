require ('./Field.css');
import React from 'react';

let Field = React.createClass({ 
    handleClick(){
        let props = this.props;
        props.handleClick(props.cellKey);
    },
    render() {
        let props = this.props;
        let content;
            
        if (props.mine){
            content = "x";
        } else {
            if(props.mineCount > 0) {
                content = props.mineCount;
            } 
        }
      
        let className = 'field' + (props.cleared ? ' field--cleared':'');

        let style = {
            width: props.cellWidth,
            height: props.cellHeight
        }
        return (        
            <button className={className}
                style={style}
                onClick = {this.handleClick}
            >
                {props.cleared && content}
            </button>
        );
    }
});

module.exports = Field;