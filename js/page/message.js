//首頁
myApp.controller('messageCtrl', ['$scope', function ($scope) {
	var flag = true;
	$scope.clickbtn = function(id){
		if(id==1){
			id.checked = flag;
		}else{
			id.checked = !flag;
		}
    	flag = !flag;
	};
}]);
