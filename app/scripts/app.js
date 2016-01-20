(function () {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode( {
      enabled: true,
      requireBase: false
    });
    
    $stateProvider
      .state('landing', {
        url: '/',
      templateUrl: '/templates/landing.html'
    })
    
    .state('album', {
      url: '/album',
      templateUrl:'/templates/album.html'
    });
  }


  angular
    .module('blocJams', [ui.router])
    .config(config);
})();
    /*
    1. blocJams argument is the module name, 
    2. second argument is an empty  array used to inject dependencies
    3. set up state configuration using provider (=service)
    */