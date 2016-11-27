// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
var myApp = angular.module('myApp', ['ionic']);

//加载提示全局配置
myApp.constant('$ionicLoadingConfig', {
  template: '默认加载模板……'
});

myApp.controller('myCtrl', ['$scope', function ($scope,$ionicTabsDelegate) {
	//選項卡選中效果
	$scope.selectTabWithIndex = function(index) {
    	$ionicTabsDelegate.select(index);
    	switch(index){
    		case 1:
    			$scope.go('message');
    			break;
    		case 2:
    			$scope.go('contacts');
    			break;
    		case 3:
    			$scope.go('dynamic');
    			break;
    	}
  	}
	
}]);
