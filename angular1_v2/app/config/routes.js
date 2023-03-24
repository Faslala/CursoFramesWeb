angular.module('primeiraApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
      url: "/dashboard",
      templateUrl: "dashboard/dashboard.html"
    }).state('billingCycle', {
      url: "/billingCycles?page",
      templateUrl: "billingCycle/tabs.html"
    })
    // .state('teste', {
    //   url: "/teste",
    //   templateUrl: "billingCycle/tabs.html" }) teste para fazer outra componente funcionar

    $urlRouterProvider.otherwise('/dashboard')
  }
])