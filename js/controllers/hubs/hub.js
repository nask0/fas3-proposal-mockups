'use strict';

/** @todo !!! */
angular.module('fedoraHubs')
    .controller('HubController', ['$scope', '$rootScope', '$stateParams', '$timeout', '$http', '$mdDialog', 'WidgetsService', 'hubResolver',
        function( $scope, $rootScope, $stateParams, $timeout, $http, $mdDialog, WidgetsService, hubResolver ) {
            $scope.hub = hubResolver;

            // @todo
            $scope.loadHubWidget = function( widgetId ) {

            };
        }
    ]);