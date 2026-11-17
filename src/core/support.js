define([
	"../var/support"
], function( support ) {

support.createHTMLDocument = (function() {
	// Support: IE<9
	// document.implementation.createHTMLDocument is not available
	if ( !document.implementation || !document.implementation.createHTMLDocument ) {
		return false;
	}
	var doc = document.implementation.createHTMLDocument( "" );
	doc.body.innerHTML = "<form></form><form></form>";
	return doc.body.childNodes.length === 2;
})();

return support;
});
