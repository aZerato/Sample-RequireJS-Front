require.config({
	paths: {
		'jquery': '../vendors/jquery',
		'toastr': '../vendors/toastr'
	},
	shim: {
		'toastr': {
			deps: ['jquery'],
			exports: '$'
		}
	}
});

require(['toastr'], function(toastr) {
	$(document).ready(function() {
		
		toastr.info('Are you the 6 fingered man?');
	
	});
});
