if (document.location.hostname == "localhost") {
    var baseurl = "";
} else {
    var baseurl = "https://static.code4sa.org/cape-town-fires/";
}
document.write('<div id="code4sa-cape-town-fires-index"></div>');
document.write('<script type="text/javascript" src="' + baseurl + 'js/pym.js"></script>');
document.write("<script>var pymParent = new pym.Parent('code4sa-cape-town-fires-index', '" + baseurl + "index.html', {});</script>");
