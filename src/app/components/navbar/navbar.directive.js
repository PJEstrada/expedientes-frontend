(function() {
  'use strict';

  angular
    .module('frontendJudicial')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'ctrl',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(AuthService, moment) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
      vm.isLoggedIn = AuthService.isLoggedIn();
      vm.current_user = AuthService.currentUser();

      vm.logout = function(){
        console.log("ashdfjksa");
        AuthService.logout();
      }
    }
  }

})();
