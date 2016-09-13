var app = angular.module('infoApp', ["ngSanitize", "ngRoute"])
.config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'pages/2/one.html',
                        controller: "listdata"
                    })
                    .when('/pages/2/two', {
                        templateUrl: 'pages/2/two.html',
                        controller: "listdata"

                    })
                    .when('/pages/2/three', {
                        templateUrl: 'pages/2/three.html',
                        controller: "listdata"

                    })
                    .when('/pages/2/four', {
                        templateUrl: 'pages/2/four.html',
                        controller: "listdata"

                    })
                    .when('/pages/2/five', {
                        templateUrl: 'pages/2/five.html',
                        controller: "listdata"

                    })
                    .when('/pages/2/six', {
                        templateUrl: 'pages/2/six.html',
                        controller: "listdata"

                    })
                    .when('/pages/3/one', {
                        templateUrl: 'pages/3/one.html',
                        controller: "listdata"

                    })
                    
                    .otherwise({redirectTo: '/'});
})
.filter('searchemp', function(){
    return function(items,input){
        
        // return false;
        if(!input){
            return items;
        }
        // console.log(items);
        var filtered = [];
        input = input.toLowerCase();
        angular.forEach(items, function(item) {
            if((item.name.indexOf(input) !== -1) || (item.gender.indexOf(input) !== -1)){
                filtered.push(item);
            }
        });
         return filtered;
    }
   
})
.factory('jsonDataFactory',function($http){
    var obj = {};
    obj.getData = function(){
        return $http.get("data.json");
    }
    return obj;
})
.controller("listdata",function($scope,jsonDataFactory){
    //declare  empty array
    $scope.data = [];
    //Checkbox value to change filter
    $scope.exact = false;
    //Defalt view value
    $scope.myview = 'table';
    // Check box value to default hide salary
    $scope.maskSalary =false;   
    
    jsonDataFactory.getData().success(function(response) {
           angular.forEach(response, function(value, key){
               value.dob = new Date(value.dob);
           });
           $scope.data = response;
        }
        
    );
});



