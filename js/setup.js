var main = function(){
	var height = 16;
	var width = 16;
	makeRows(height);
	makeCols(width);
	scale(50);
};

var makeRows = function(height){
	var row = "<div class='row'></div>"
	for(var i = 0; i<height; i++){
		$('.main>.container').append(row);
	};
};

var makeCols = function(width){
	var col = "<square opac='0' class='square'></square>"
	for (var i = 0; i<width; i++){
		$('.main .row').append(col);
	};
};

var scale = function(scaleSize){
	$('.main .row').css({'height' : scaleSize});
	var rowHeight = scaleSize;
	$('.square').css({'height': rowHeight, 'width': rowHeight});
};

$(document).ready(main);