angular.module('gen', ['ionic', 'gen-controllers'])

.config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.when('', 'inbox.html');

        $stateProvider
        
            .state('inbox', {
                url:'/inbox',
                templateUrl: 'inbox.html',
                controller: function($scope) {
                    $scope.links = [
                        
                            {
                                wide: '342.35236178762267px',
                                high: '75.3688259420789px',
                                top: '160px',
                                left: '10px',
                                href: '#/inbox'
                            },
                        
                            {
                                wide: '262.1941932430908px',
                                high: '75.96116135138185px',
                                top: '0px',
                                left: '7.8058067569092024px',
                                href: '#/new'
                            },
                        
                            {
                                wide: '89.92893218813452px',
                                high: '74.92893218813447px',
                                top: '460px',
                                left: '10px',
                                href: '#/search'
                            },
                        
                            {
                                wide: '342.9289321881345px',
                                high: '77.92893218813452px',
                                top: '318.42173714778846px',
                                left: '15.873478855663453px',
                                href: '#/reply'
                            },
                        
                    ]
                }
            })
            
            .state('new', {
                url:'/new',
                templateUrl: 'new.html',
                controller: function($scope) {
                    $scope.links = [
                        
                    ]
                }
            })
            
            .state('search', {
                url:'/search',
                templateUrl: 'search.html',
                controller: function($scope) {
                    $scope.links = [
                        
                    ]
                }
            })
            
            .state('reply', {
                url:'/reply',
                templateUrl: 'reply.html',
                controller: function($scope) {
                    $scope.links = [
                        
                    ]
                }
            })
            

});