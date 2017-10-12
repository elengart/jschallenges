require ('./Field.css');
import React from 'react';

let Field = React.createClass({ 
    handleClick(){
        let props = this.props;
        props.handleClick(props.cellKey);
    },
    
    renderContent() {
        let props = this.props;
        if (!props.cleared) {
            return;
        }
        
        let content;
        let dataset = {};
        let className = 'field__content';
        
        
        if (props.mine){
            className = `${className} ${className}--ismine`;
        } else {
            if(props.mineCount > 0) {
               content = props.mineCount;
               className =  `${className} ${className}--${props.mineCount}mines`;
            } 
        }
        return (<span className={className}>{content}</span>);
    },
    
    render() {
        let props = this.props;
        let className = 'field' + (props.cleared ? ' field--cleared':'');

        let style = {
            width: props.cellWidth,  
            height: props.cellHeight
        }
        let content = this.renderContent();
        return (        
            <button className={className}
                style={style}
                onClick = {this.handleClick}
            >
                {content}
            </button>
        );
    }
});

module.exports = Field;