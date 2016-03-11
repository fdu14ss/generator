angular.module('gen', ['ionic'])

.config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.when('', '<%= app.pages[app.landing].name %>');

        $stateProvider
        <% _.each(app.pages, function(page) { %>
            .state('<%= page.name %>', {
                url:'/<%= page.name %>',
                templateUrl: '<%= page.name %>.html',
                controller: function($scope) {
                    $scope.links = [
                        <% _.each(page.actions, function(action) { %>
                            {
                                wide: '<%= action.wide %>',
                                high: '<%= action.high %>',
                                top: '<%= action.top %>',
                                left: '<%= action.left %>',
                                href: '#/<%= app.pages[action.link].name %>'
                            },
                        <% }) %>
                    ]
                }
            })
            <% }); %>

});