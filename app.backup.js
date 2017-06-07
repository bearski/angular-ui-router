var app = angular.module('emailApp', ['ngMaterial', 'ngMessages', 'ngAnimate', 'ui.router']);


// configuring our routes 
// =============================================================================
app.config(function($stateProvider, $urlRouterProvider) {

    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/profile');

    $stateProvider

    // route to show our basic form (/form)
    .state('form', {
        url: '/form',
        templateUrl: 'form.html',
        controller: 'emailController'
    })

    // nested states 
    // each of these sections will have their own view
    // url will be nested (/form/profile)
    .state('form.profile', {
        url: '/profile',
        templateUrl: 'form-profile.html'
    })

    // url will be /form/interests
    .state('form.interests', {
        url: '/interests',
        templateUrl: 'form-interests.html'
    })

    // url will be /form/dates
    .state('form.dates', {
        url: '/dates',
        templateUrl: 'form-dates.html'
    })

    // url will be /form/payment
    .state('form.payment', {
        url: '/payment',
        templateUrl: 'form-payment.html'
    })


    .state('cashup', {
        url: '/cashup',
        templateUrl: 'cashup.html',
        controller: 'cashupController'
      });

});


app.controller('emailController', [
    '$scope',
    // 'emails',
    function($scope, emails) {

        $scope.test = 'Hello Bearski!';

        $scope.activeTab = "inbox";

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



        // $scope.isPopupVisible = false;
        // $scope.isComposePopupVisible = false;
        // $scope.composeEmail = {};

        // $scope.sentEmails = [];


        // $scope.sendEmail = function() {
        //     $scope.composeEmail.date = new Date();
        //     $scope.composeEmail.from = 'me';

        //     $scope.isComposePopupVisible = false;
        //     //$scope.sentEmails.push($scope.composeEmail); // OLD
        //     $scope.sentEmails.splice(0,0,$scope.composeEmail); // NEW
        // };


        // $scope.showPopup = function(email) {
        //     $scope.isPopupVisible = true;
        //     $scope.selectedEmail = email;
        // };


        // $scope.closePopup = function() {
        //     $scope.isPopupVisible = false;
        // };


        // $scope.showComposePopup = function() {
        //     $scope.composeEmail = {};
        //     $scope.isComposePopupVisible = true;
        // };


        // $scope.closeComposePopup = function() {
        //     $scope.isComposePopupVisible = false;
        // };


        // $scope.forward = function() {
        //     // hide the view details popup
        //     $scope.isPopupVisible = false;

        //     // create an empty composeEmail object the compose email popup is bound to
        //     $scope.composeEmail = {};

        //     // copy the data from selectedEmail into composeEmail
        //     angular.copy($scope.selectedEmail, $scope.composeEmail);

        //     // edit the body to prefix it with a line and the original email information
        //     $scope.composeEmail.body = 
        //         "\n-------------------------------\n" 
        //         + "from: " + $scope.composeEmail.from + "\n"
        //         + "sent: " + $scope.composeEmail.date + "\n"
        //         + "to: " + $scope.composeEmail.to + "\n"
        //         + "subject: " + $scope.composeEmail.subject + "\n"
        //         + $scope.composeEmail.body;

        //     // prefix the subject with “RE:”
        //     $scope.composeEmail.subject = "FWD: " + $scope.composeEmail.subject;

        //     // the email is going to the person who sent it to us 
        //     // so populate the to with from
        //     $scope.composeEmail.to = "";

        //     // it’s coming from us
        //     $scope.composeEmail.from = "me";

        //     // show the compose email popup
        //     $scope.isComposePopupVisible = true;
        // };


        // $scope.reply = function() {
        //     // hide the view details popup
        //     $scope.isPopupVisible = false;

        //     // create an empty composeEmail object the compose email popup is bound to
        //     $scope.composeEmail = {};

        //     // copy the data from selectedEmail into composeEmail
        //     angular.copy($scope.selectedEmail, $scope.composeEmail);

        //     // edit the body to prefix it with a line and the original email information
        //     $scope.composeEmail.body = 
        //         "\n-------------------------------\n" 
        //         + "from: " + $scope.composeEmail.from + "\n"
        //         + "sent: " + $scope.composeEmail.date + "\n"
        //         + "to: " + $scope.composeEmail.to + "\n"
        //         + "subject: " + $scope.composeEmail.subject + "\n"
        //         + $scope.composeEmail.body;

        //     // prefix the subject with “RE:”
        //     $scope.composeEmail.subject = "RE: " + $scope.composeEmail.subject;

        //     // the email is going to the person who sent it to us 
        //     // so populate the to with from
        //     $scope.composeEmail.to = $scope.composeEmail.from;

        //     // it’s coming from us
        //     $scope.composeEmail.from = "me";

        //     // show the compose email popup
        //     $scope.isComposePopupVisible = true;
        // };


        // $scope.emails = [{
        //     from: 'John',
        //     to: 'me',
        //     subject: 'I love angular',
        //     date: 'Jan 1',
        //     body: 'hello world!'
        // }, {
        //     from: 'Jack', 
        //     to: 'me',
        //     subject: 'Angular and I are just friends',
        //     date: 'Feb 15',
        //     body: 'just kidding'
        // }, {
        //     from: 'Ember', 
        //     to: 'me',
        //     subject: 'I hate you Angular!',
        //     date: 'Dec 8',
        //     body: 'wassup dude'
        // }];




        // $scope.leaveType = { type1: 'Annual', type2: 'Sick', type3: 'Unpaid', type4: 'Family'};


        // $scope.open = function () {
        //   var modalInstance = $modal.open({
        //       templateUrl: 'public/html/datePicker.html',
        //       controller: 'MyModalCtrl'
        //     });
        // };

        // $scope.emails = emails.emails;

        // $scope.addPost = function() {
        //     if (!$scope.title || $scope.title === '') {
        //         return; }
        //     $scope.posts.push({
        //         title: $scope.title,
        //         link: $scope.link,
        //         upvotes: 0
        //     });
        //     $scope.title = '';
        //     $scope.link = '';
        // };

        // $scope.incrementUpvotes = function(post) {
        //     post.upvotes += 1;
        // };
    }

]);



app.controller('cashupController', [
    '$scope', 
    function($scope){
        $scope.test = 'This is the cashupController';   

        $scope.activeTab = "sent"; 
}]);
