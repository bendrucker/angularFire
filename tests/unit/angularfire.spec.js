describe('module: firebase', function () {

  var $firebase;

  beforeEach(module('firebase'));

  beforeEach(inject(function (_$firebase_) {
    $firebase = _$firebase_;
  }));

  describe('filter: orderByPriority', function () {
  });

  describe('factory: $firebase', function () {

    describe('#$bind', function () {

      var scope;
      beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        firebase = $firebase();
        firebase.$bind(scope, 'bound', jasmime.createSpy('defaultFn'));
      }));

      it('auto-updates the reference with changes to the local model');
      it('sets the value using the defaultFn if the remote ref is empty');
      it('unbinds when the scope is destroyed');
      it('returns a promise that resolves when the remote value is received');
      it('resolves with the unbind method');

    });

  });

});