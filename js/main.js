$OBJ = {
	'win': $(window),
	'doc': $(document),
	'html': $('html')
}

function winW() { //창 너비
	return $OBJ.win.width();
}

function winH() { // 창 높이
	return $OBJ.win.height();
}

function winSh() { // 스크롤 값
	return $OBJ.win.scrollTop();
}

var topButton = {
	init : function(){
		this.action();
	},
	action : function(){
		var a = $('#topButton');
		var spd = 300;

		function topBtn(){
			if(winSh() > 100){
				a.addClass('active');
			}else{
				a.removeClass('active');
			}
		}

		a.on('click',function(){
			$.scrollTo($('#main'),spd);
		});

		$OBJ.win.on('load scroll',function(){
			topBtn();
		});

	}
}

$OBJ.doc.ready(function () {
	topButton.init();
});
