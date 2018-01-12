/**
    UltimatePageLoadDetector - register elements that renders asynchronosly and detect the dom change

    @asyncElements {array of Elements} required - elements where we expect asychronous content changes
    
    @callback{function} optional - called when all are rendered  
    
    @maxTime{number} optional - maximum waiting time in ms
*/

function UltimatePageLoadDetector(asyncElements, callback, maxTime) {
    var i;
    var maxTime = maxTime || 10000;
    var elCount = asyncElements && asyncElements.length;
    if (!elCount) {
        return;
    }
    
    var renderedCount = 0;
    function onChangeHandler(callback, event) { 
        renderedCount++; 
        if (renderedCount == elCount) {
            unregister();
            callback("success");
        }
    };

    var evtName = 'DOMSubtreeModified';
    function register() {
        for (i = 0 ; i < elCount; i++) {      
           asyncElements[i].addEventListener(evtName, onChangeHandler.bind(null, callback));
        }
    }
    
    function unregister() {
        for (i = 0 ; i < elCount; i++) {      
           asyncElements[i].removeEventListener(evtName, onChangeHandler);
        }
    }
    
    // detect end of rendering
    register();
    
    // detect long rendering
    window.setTimeout(function() {
        if (renderedCount < elCount) {
            unregister();
            elCount = 0;
            callback("error");
        }
    }, maxTime);
};
