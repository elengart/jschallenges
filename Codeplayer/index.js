global.$ = require('jquery');

function prepOutput() {

    $('#output').contents().find('head').append('<style></style>');
    $('#output').contents().find('body').append('<div></div><script><\/script>');
}

function testData()  {
    var htm = '<p>lorem<p>';
    var css = '* {color:green}';
    var js = 'var el = document.createElement("i"); el.innerHTML="iii"; document.body.appendChild(el)'
    $('#html textarea').val(htm);
    $('#css textarea').val(css);
    $('#js textarea').val(js);
    setHtml(htm);
    setCSS(css);
    setJS(js);   
}

function setHtml(val) {
    $('#output').contents().find('div').html(val);
}

function setCSS(val) {
    $('#output').contents().find('style').html(val);
}

/* 
    in order to dynamically add javascript, I can't simply replace source in the <script> tag.
    Instead, I can either rebuild script node or run eval() function inside iframe contentWindow.
    Opted for the first solution
*/

function setJS(val) {
    $('#output').contents().find('script').remove();
    $('#output').contents().find('body').append('<script>' + val + '</\script>');
}

$(function(){
    // toggle panel visibilty
    $("#nav li a").click(function(e) {
        e.preventDefault();
        var target_panel = this.href.split('#')[1];
        $("#player").toggleClass(target_panel);
        var visiblePanels = $('.panel:visible').length;
        if (visiblePanels) {
            $('.panel').width(99/visiblePanels  + "%");
        }
    });

    // process changes
    $(".panel textarea").on('keyup change', function(){
          var val = $(this).val();
          var target_id = $(this).parent().attr("id");
          var el;
          switch (target_id) {
              case 'html':
                setHtml(val);
                break;
              case 'css':
                setCSS(val);
                break;
              case 'js':
                setJS(val);
          }
    });

    prepOutput();
    testData();
});