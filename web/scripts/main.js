require.config({
	baseUrl: './vendors/',
	paths: {
		'jquery': 'jquery',
		'toastr': 'toastr',
		'bootstrap' : 'bootstrap',
		'underscore': 'underscore',
		'backbone': 'backbone',
		'marionette': 'marionette'
	},
	shim: {
		'toastr': {
			deps: ['jquery'],
			exports: '$'
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['jquery', 'underscore']
		},
		'marionette': {
			deps: ['jquery', 'underscore', 'backbone'],
			exports: 'Marionette'
		}
	}
});

require(['toastr'], function(toastr) {
	$(document).ready(function() {
		
		toastr.info('Are you the 6 fingered man?');
	
	});
});
