jboss

    .controller("UserCtrl", function ($rootScope,$scope,$window,$log,$q,$timeout,MessageService) {



        //列表
        $scope.posts = [];


        //提交的表单
        $scope.form = {
            phone : "",
            submit   : true,
            token  : ""
        }


        $scope.deUser = function(){

            $scope.form.submit = false;

            MessageService.deletePhone($scope.form.phone).then(function(result){
                alert(result.msg);
                $scope.form.submit = true;
            },function(err){
                alert("网络错误！");
                $scope.form.submit = true;
            });

        }

    });