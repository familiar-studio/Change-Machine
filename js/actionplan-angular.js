var app = angular.module('ChangeMachineApp',[])


app.controller('ActionsCtrl', function($scope) {

  $scope.defaultActions = [
    {"name": "Do this thing", "column": 1, "row":1},
    {"name": "Do something else", "column": 3, "row":1},
     {"name": "Save a ton of $$", "column": 4, "row":1}
  ];
  
  
  
  $scope.otherActions = [
    {"name": "more actions", "column": 1, "row":1},
    {"name": "even more", "column": 2, "row":1},
     {"name": "try this", "column": 2, "row":2}
  ];
  
  $scope.actions = $scope.defaultActions;
  
  
  $scope.changeMeeting = function (other) {
  
	  	$scope.actions = other;
  
  	
  }
  $scope.addAction = function (action) {
	  $scope.actions.push(action);
	  console.log('Do this thing'+action);
	  $scope.single = {};
	  
  }
 
});


app.directive("gridster", function() {
  return {
    restrict: "EA",
    template: '<div class="gridster"><div ng-transclude/></div>',
    transclude: true,
    replace: true,
    controller: function() {
      var gr;
      gr = null;
      return {
        init: function(elem) {
		 var defaultOptions = {
	            widget_margins: [10, 10],
	            widget_base_dimensions: [214, 110],
	            min_cols: 4,
	            max_cols: 4,
	       };
          var ul;
          ul = elem.find("ul");
          gr = ul.gridster(defaultOptions).data('gridster');
        },
        addItem: function(elm) {
          gr.add_widget(elm, 1, 1, 1, 1);
        },
        removeItem: function(elm) {
          gr.remove_widget(elm);
        }
      };
    },
    link: function(scope, elem, attrs, controller) {
      return controller.init(elem);
    }
  };
});

app.directive("gridsterItem", function() {
  return {
    restrict: "A",
    require: "^gridster",
    link: function(scope, elm, attrs, controller) {
      controller.addItem(elm);
      return elm.bind("$destroy", function() {
        controller.removeItem(elm);
      });
    }
  };
});