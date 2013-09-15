'use strict';

describe('Controller: PrefecturesCtrl', function () {

  // load the controller's module
  beforeEach(module('newAngularKendoApp'));

  var PrefecturesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrefecturesCtrl = $controller('PrefecturesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
