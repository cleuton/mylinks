angular.module('mylinks', [])
 .controller('LinksController', ['$scope', '$http',function($scope, $http) {
   $scope.colecaoLinks = [];

   $scope.getAll = function (mlinks) {
     $scope.colecaoLinks = mlinks;
   };
   

   $scope.update = function() {
     $http.get('/update').success(function(lista) {
       $scope.colecaoLinks = lista.myLinks;
     });
   };   
   
 }]);

 