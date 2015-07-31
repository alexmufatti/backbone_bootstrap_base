define(['qunit','models/speedModel'], function(qunit,dummyLib) {
  'use strict';
  return function()
  {
    qunit.module("Foo");
    qunit.test("Foo Test", function() {
      equal(1, 1, "returns 'Hello'");
    });
  };
});
