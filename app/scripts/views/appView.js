define(['jquery',
	'underscore','backbone','bootstrap','views/SpeedView',
	'text!templates/appTemplate.html'], function($, _,Backbone, Bootstrap,speedView, appTemplate) {
		'use strict';
  var AppView = Backbone.View.extend({
    el: '#todoapp',
    template: _.template(appTemplate),
    initialize: function() {
      console.log( 'Wahoo!' );

			this.allCheckbox = this.$('#toggle-all')[0];
			this.$input = this.$('#new-todo');
			this.$footer = this.$('#footer');
			this.$main = this.$('#main');
			this.$todoList = this.$('#todo-list');

			this.render();
    },
		render: function()
		{
				this.$main.show();
		}
  });

  return AppView;
});
