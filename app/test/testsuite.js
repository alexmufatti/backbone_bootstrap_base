
require([
      'qunit',
        'test/test.js'
    ],

    // Resolve all testModules and then start the Test Runner.
	function(qunit, Test){
    Test();
    QUnit.load();
    QUnit.start();
	});
