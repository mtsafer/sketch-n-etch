var mode = "SOLID";
var base = "black";
var sketch = "white";


var main = function(){
	$('.square').css({"background-color": base});
	
	modeSelect();
	baseSelect();
	sketchSelect();
	titleSet();
	sketchIt();
	$('#reset').on('click', reset);

	$('#resize').on('click', resize);
};

var resize = function(){
	var size = prompt("How many boxes per side: ");
	var scale = 800/size;
	$('.row').remove();
	var row = "<div class='row'></div>"
	var col = "<div class='square'></square>"
	for(var i = 0; i<size; i++){
		$('.main>.container').append(row);
	};
	for (var i = 0; i<size; i++){
		$('.main .row').append(col);
	};
	$('.main .row').css({'height' : scale});
	$('.square').css({'height': scale, 'width': scale});
	$('.square').css({"background-color": base});
	
	modeSelect();
	baseSelect();
	sketchSelect();
	titleSet();
	sketchIt();
	$('#reset').on('click', reset);
};

var sketchIt = function(){
	$('.square').on('mouseenter', function(){
		switch(mode){
			case "SOLID":
				$(this).css({'background-color': sketch})
				break;
			case "GRADIANT":
				var opa = parseFloat($(this).attr('opac'));
				opa = opa + 0.1;
				$(this).attr('opac', opa);
				$(this).css({'background-color': sketch,'opacity':opa, 'transition':'0s'})
				break;
			case "TRAIL":
				$('.square').on('mouseenter', function(){
					$(this).css({'background-color': sketch, 'transition':'0s'})
				});
				$('.square').on('mouseleave', function(){
					$(this).css({'background-color': base, 'transition':'2s'});
	});
				break;
			default:
				break;
		};
	});
};

var modeSelect = function(){
	$(".mode").on('click', function(){
		mode = $(this).text().toUpperCase();
		titleSet(mode);
	});
};

var baseSelect = function(){
	$('.base').on('click', function(){
		base = $(this).attr('id');
		$('.square').css({"background-color": base});
		$('.row').css({"background-color": base});
	});
};

var sketchSelect = function(){
	$('.sketch').on('click', function(){
		sketch = $(this).attr('id');
	});
};

var titleSet = function(){
	$('#mode').text(mode);
};

var reset = function(){
	$('.square').css({"background-color": base})
	$('.square').attr('opac', 0);
};


$(document).ready(main);