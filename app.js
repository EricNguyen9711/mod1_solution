(function() {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.list = "";
    $scope.arr = "";
    $scope.message = "";
    $scope.checkList = function() {
      var itemList = $scope.list;
      $scope.message = LunchCheckMessage(itemList);
    }

    function LunchCheckMessage(itemList) {
      const itemArr = itemList.split(',');
      var msg = "";
      var total = 0;
      var size = itemArr.length;

      for(let i=0; i<size; i++) {
        if(itemArr[i] != "") {
          total++;
        }
      }
      if(total == 0) msg = "Please enter data first";
      else if(total <= 3 && total > 0) msg = "Enjoy!";
      else msg = "Too much!";

      return msg
    }

    $scope.reset = function() {
      $scope.list = "";
      $scope.message = ""
    }
  }

})();
