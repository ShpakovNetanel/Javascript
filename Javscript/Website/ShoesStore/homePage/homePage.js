jQuery(function($){
     var $Circle = $("circle-shoe12")

     $Body.css('background', $Circle.find('[data-color1]').eq(0).attr('data-color'));
     function _ChangeColor() {
			$Body.css('background', $(this).attr('data-color'));
		}
})