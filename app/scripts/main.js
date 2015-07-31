require.config({
  shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
    bootstrap: {
			deps: [
				'jquery'
			],
			exports: 'Bootstrap'
		},
		backboneLocalstorage: {
			deps: ['backbone'],
			exports: 'Store'
		}
	},
  paths: {
    'jquery': 'vendor/jquery/dist/jquery',
    'underscore': 'vendor/underscore-amd/underscore',
    'backbone': 'vendor/backbone-amd/backbone',
    'text': 'vendor/requirejs-text/text',
    'bootstrap': 'vendor/bootstrap/dist/js/bootstrap'
  }
});

require(['views/appView'], function(AppView) {
  new AppView();
});
