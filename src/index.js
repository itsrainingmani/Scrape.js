var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var lyrics = '';

var oReq = new XMLHttpRequest();
oReq.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200){
		lyrics = this.responseText;
	}
}
oReq.open("GET", "https://www.azlyrics.com/lyrics/glassanimals/porksoda.html", false);
oReq.send();

module.exports = {
	lyr: lyrics
};