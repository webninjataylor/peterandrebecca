// Global variable object namespace
var wnt = {};



// Functions
function menuhighlight(pagename){
	$('#tab-'+pagename).addClass('active');
}


// Load Check
$('document').ready(function(){
	menuhighlight(wnt.pagename);
});