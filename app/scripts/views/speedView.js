define(['backbone','text!templates/appTemplate.html'], function(Backbone, speedTemplate) {
var SpeedView = Backbone.View.extend({
		tagName: 'li',

		className: 'youtube-item span3 nicer-ux ux-maker',

		template: _.template(speedTemplate),

		events: {
			'click .media-title': 'selectMedia',
			'click .media-desc': 'toggleInformation'
		},

		initialize: function() {
			this.listenTo(this.model, 'change:isPlaying', this.render);
		},

		render: function() {
			this.$el.html( this.template(this.model.toJSON()) );
			return this;
		},

		selectMedia: function(ev) {
			this.model.set('isPlaying', true);
		},

		toggleInformation: function() {
			this.$el.toggleClass('show-description');
		},

		destroy: function() {
			this.undelegateEvents();
			this.remove();
		}
	});
});
