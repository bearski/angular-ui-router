var app = angular.module('lalemaDemoApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ui.router']);


// configuring our routes 
// =============================================================================
app.config(function($stateProvider, $urlRouterProvider) {

    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/profile');

    $stateProvider

    // route to show our basic form (/form)
        .state('form', {
        // abstract: true,
        url: '/form',
        templateUrl: 'view1/form.html',
        controller: 'leaveRequestController'
    })

    // nested states 
    // each of these sections will have their own view
    // url will be nested (/form/profile)
    .state('form.profile', {
        url: '/profile',
        templateUrl: 'view1/form-profile.html'
    })

    // url will be /form/interests
    .state('form.interests', {
        url: '/interests',
        templateUrl: 'view1/form-interests.html'
    })

    // url will be /form/dates
    .state('form.dates', {
        url: '/dates',
        templateUrl: 'view1/form-dates.html'
    })

    // url will be /form/payment
    .state('form.payment', {
        url: '/payment',
        templateUrl: 'view1/form-payment.html'
    })


    .state('cashup', {
        url: '/cashup',
        templateUrl: 'view2/cashup.html',
        controller: 'cashupController'
    })

    .state('cashup.coins', {
        url: '/coins',
        templateUrl: 'view2/cashup-coins.html'
    })

    .state('cashup.notes', {
        url: '/notes',
        templateUrl: 'view2/cashup-notes.html'
    })

    .state('cashup.electronic', {
        url: '/electronic',
        templateUrl: 'view2/cashup-electronic.html'
    })

    .state('cashup.payment', {
        url: '/payment',
        templateUrl: 'view2/cashup-payment.html'
    });

});


app.controller('leaveRequestController', [
    '$scope',
    function($scope) {

        $scope.test = 'Hello Bearski!';

        // $scope.activeTab = "inbox";

        // we will store all of our form data in this object
        $scope.formData = {};

        // function to process the form
        $scope.processForm = function() {
            $scope.formData.submissionDate = new Date();
            alert('awesome!');
        };


        $scope.datePicker = function() {
            $scope.myDate = new Date();

            $scope.minDate = new Date(
                $scope.myDate.getFullYear(),
                $scope.myDate.getMonth() - 2,
                $scope.myDate.getDate()
            );

            $scope.maxDate = new Date(
                $scope.myDate.getFullYear(),
                $scope.myDate.getMonth() + 2,
                $scope.myDate.getDate()
            );

            $scope.onlyWeekendsPredicate = function(date) {
                var day = date.getDay();
                return day === 0 || day === 6;
            };
        };
    }

]);



app.controller('cashupController', [
    '$scope',
    function($scope) {
        $scope.test = 'This is the cashupController';

        $scope.cashUp = [];

        $scope.coins = [
            { name: '5c', value: 5, amount: 0 },
            { name: '10c', value: 10, amount: 0 },
            { name: '20c', value: 20, amount: 0 },
            { name: '50c', value: 50, amount: 0 },
            { name: 'R1', value: 100, amount: 0 },
            { name: 'R2', value: 200, amount: 0 },
            { name: 'R5', value: 500, amount: 0 }
        ];

        $scope.notes = [
            { name: 'R10', value: 1000, amount: 0 },
            { name: 'R20', value: 2000, amount: 0 },
            { name: 'R50', value: 5000, amount: 0 },
            { name: 'R100', value: 10000, amount: 0 },
            { name: 'R200', value: 20000, amount: 0 }
        ];

        $scope.electronic = [
            { name: 'Credit Card', amount: 0 },
            { name: 'Debit Card', amount: 0 },
            { name: 'Snapscan', amount: 0 },
            { name: 'Zapper', amount: 0 }
        ];


        // function to process the form
        $scope.processForm = function() {
            $scope.cashUp.submissionDate = new Date();
            alert('thank you!');
        };


        $scope.addNewElement = function(newElement) {
            var found = false;
            for (var i = 0; element = $scope.cashUp[i]; i++) {
                if (element.name == newElement.name) {
                    found = true;
                    if (newElement.population === 0) {
                        $scope.cashUp[i] = false;
                    } else {
                        $scope.cashUp[i] = newElement;
                    }
                }
            }
            if (found === false) {
                $scope.cashUp.push(newElement);
            }
        };

    }
]);
