$('#para-tip').hide();

$('#para').mouseenter(function() {
	$('#para-tip').fadeIn("slow");
});

$('#para').mouseleave(function() {
	$('#para-tip').fadeOut("slow");
});