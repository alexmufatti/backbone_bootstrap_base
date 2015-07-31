
    // Configure RequireJS so it resolves relative module paths from the `src`
    // folder.
var requirejs ={
      baseUrl: '/app/scripts',
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
    		},
        shim: {
          'QUnit': {
            exports: 'QUnit',
            init: function() {
              QUnit.config.autoload = false;
              QUnit.config.autostart = false;
            }
          }
        }
    	},
      paths: {
        'jquery': 'vendor/jquery/dist/jquery',
        'underscore': 'vendor/underscore-amd/underscore',
        'backbone': 'vendor/backbone-amd/backbone',
        'text': 'vendor/requirejs-text/text',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
        'qunit': 'vendor/qunit/qunit/qunit'
      }
    };
