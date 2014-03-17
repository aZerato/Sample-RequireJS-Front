require.config({
	paths: {
		'jquery': '../vendors/jquery',
		'toastr': '../vendors/toastr'
	}
});

require(['jquery', 'toastr'], function($, toastr) {
	$(document).ready(function() {
		
		toastr.info('Are you the 6 fingered man?');
	
	});
});