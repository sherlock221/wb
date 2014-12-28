jboss

    .controller("AuditSchoolCtrl", function ($rootScope,$scope, $window, $log, $q, $timeout, BaseService) {


        //显示tab
        $rootScope.changeTab("audit",0);



        //查询班级
        var loadList = function () {

            //查询全部学校
            BaseService.getSchool().then(function (res) {

                if(res.rtnCode != "0000000"){
                    alert(res.msg);
                }
                else{
                    $scope.results = res.bizData;
                }

            }, function (err) {
                alert(err);
            });


        }

            loadList();

    });