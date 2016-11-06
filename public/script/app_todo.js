console.log("let's go");
var app = angular.module('app_TodoList', []);

app.controller('sumbitCtrl', function($scope,$rootScope) {
      $scope.tasks = [{
        "typeoftask" : "Food",
        "entitled" : "Buy a dozen egg"
      }];
      $scope.newTask = {};
      $scope.text ="";
      $scope.inputText = angular.element(document.querySelector('#task'));
      $scope.newTask.entitled = "";
      //console.log("ma valeur: "+ $scope.inputText);
      $scope.submitTask = function(){
        //console.log('$scope.text');
        //if( $scope.text){
          $scope.tasks.push($scope.newTask);
          $scope.newTask = {};
        //}
      };
      console.log($scope.tasks);
});
