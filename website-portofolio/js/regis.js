$(document).ready(function() {
	$('#checkbox').click(function() {
		/* Act on the event */
		if($(this).is(':checked')){
			$('#password').attr('type','text');
			
		}else{
			$('#password').attr('type','password');
		}
	});
});
 
