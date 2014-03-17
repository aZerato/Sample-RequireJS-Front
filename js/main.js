require.config({
	paths: {
		// faire tache grunt qui copiera dans un dossier lib ou vendor
		'jquery': '../bower_components/jquery/dist/jquery',
		'toastr': '../bower_components/toastr/toastr'
	}
});

require(['jquery', 'toastr'], function($, toastr) {
	$(document).ready(function() {
		
		toastr.info('Are you the 6 fingered man?');
	
	});
});