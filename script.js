
$(document).on('click', function(event) {
	if (!$(event.target).closest('td,th').length) {
		$("*").removeClass("clicked");
		$("*").removeClass("hover");
	}
});

$(function() {
    $("table").delegate('td,th','mousedown mouseover mouseleave', function(e) {

		var eventType = e.type;

    	if (eventType == 'mouseover') {
	        $(this).parent().addClass("hover");
	        $("colgroup").eq($(this).index()).addClass("hover");
        } else if (eventType == 'mouseleave') {
			$(this).parent().removeClass("hover");
			$("colgroup").eq($(this).index()).removeClass("hover");
        } else {
			var onHighlightedCell =
							$(this).parent().hasClass("clicked")
						&&  $("colgroup").eq($(this).index()).hasClass("clicked");
			if ( onHighlightedCell ) {
				$(this).parent().removeClass("clicked");
				$("colgroup").eq($(this).index()).removeClass("clicked");
			} else {
				$("*").removeClass("clicked");
				$("*").removeClass("hover");
				$(this).parent().addClass("clicked");
				$("colgroup").eq($(this).index()).addClass("clicked");
			}
	    }

    });

});