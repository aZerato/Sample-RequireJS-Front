/*
* Model
*/
define([
	'backbone'
	], function(Backbone) {
		var Todo = Backbone.Model.extend({
			/* defaults attributes values */
			defaults: {
				content: 'content',
				state: false
			}
		});

		return Todo;
});
