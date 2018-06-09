$('#shclProgress').shCircleLoader();
var i = 0;
setInterval(function() {
    $('#shclProgress').shCircleLoader('progress', i + '%');
    if (++i > 99) window.location.href="login.html";
}, 60);