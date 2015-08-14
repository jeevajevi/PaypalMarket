$(document).ready(function() {	
	// Sort function for UA classes list-sort-nobullet and list-sort
	$('.list-sort-nobullet').children().sort(asc_sort).appendTo('.list-sort-nobullet');
	$('.list-sort').children().sort(asc_sort).appendTo('.list-sort');
	// Open browser print dialog window for UA print links
	$('#print').click(function() { window.print(); return false; });
});
// Ascending sort
function asc_sort(a, b){
	// Match only non-word characters. Makes sure to keep Unicode word characters for different languages.
	var patt = /[\u0021-\u002F,\u003A-\u003F,\u005B-\u005F]+/g;
    return ($(b).text().replace(patt,"").toUpperCase()) < ($(a).text().replace(patt,"").toUpperCase()) ? 1 : -1;    
}

