function getContent() {
    var content1 = document.getElementById("asyncContent1");
    var content2 = document.getElementById("asyncContent2");
    var ajaxStatus = document.getElementById("ajaxStatus");
    
    
    ajaxStatus.className = "loading";
    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
                content1.innerHTML = xmlhttp.responseText;
                ajaxStatus.className = "success";        
           }
           else {
               ajaxStatus.className = "error"
               content1.innerHTML = "oops...can't load anything";
           }
        }
    };

    xmlhttp.open("GET", "assets/quote.txt", true);
    
    // extra delay just to highlight the issue
    window.setTimeout(function() {
        xmlhttp.send();
    }, 3000);
    
    // for simplicity, just load some other content with delay
    
    content2.innerHTML="please wait ..."
    window.setTimeout(function(){
        content2.innerHTML = "Even the tiniest Poodle or Chihuahua is still a wolf at heart";
    }, 6000);
}


document.addEventListener("DOMContentLoaded", function(event) {
    
    // problem
    var pageStatus = document.getElementById("pageStatus");
    getContent();
    pageStatus.innerHTML = "page rendered, but that's not it... we want to know when all content is loaded";
    
    // solution -
    var asynchElements = [document.getElementById("asyncContent1"),
                          document.getElementById("asyncContent2")];
    UltimatePageLoadDetector(asynchElements, function(status){
      if ( status === 'success') {
        pageStatus.innerHTML = "Now we are done!"
      } else {
        pageStatus.innerHTML = "Page takes too long to render"
      }
    });
});

