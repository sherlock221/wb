jboss

    .controller("MainCtrl", function ($rootScope,$scope,$window) {


//        $scope.banner_height = $window.innerWidth  / 2;
//        console.log( $scope.win_height);




//        //窗口变化
//        $window.onResizeFunction = function(){
//            $scope.style= {height:'100px'};
//          console.log("resize..." + $scope.style.height);
//        };


        $scope.goFeedBack = function(){
            $window.open("http://115.29.184.78:9001/v1/feedback/view/feedback.html");
        }
    });