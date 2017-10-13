require ('./Field.css');
import React from 'react';

let Field = React.createClass({ 
    handleClick(){
        let props = this.props;
        props.handleClick(props.cellKey);
    },
    
    getClearedStatusClassName(className) {
        let props = this.props;
        let content;
        let dataset = {};
        let cleared = `${className} ${className}--cleared`;
        
        
        if (props.mine){
            return className = `${cleared} ${className}--ismine`;
        } 
        
        if(props.mineCount > 0) {
           content = props.mineCount;
           return `${cleared} ${className}--${props.mineCount}mines`;
        } 
        return cleared;
    },
    
    render() {
        let props = this.props;
        let className = 'field';
        let content;
        
        if (props.cleared) {
            className = this.getClearedStatusClassName(className);
            content = ( props.mineCount > 0 ) && props.mineCount;
        } else {
            content = (<button
                className = "field__button"                                
                onClick = {this.handleClick}
            />);
        }

        let style = {
            width: props.cellWidth,  
            height: props.cellHeight
        }
        
        
        return (  
            <div className={className}
                style={style}>
                {content}
            </div> 
        );
    }
});

module.exports = Field;