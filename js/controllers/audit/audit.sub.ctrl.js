jboss

    .controller("AuditSubjectCtrl", function ($rootScope,$scope, $window, $log, $q, $timeout, AuditService) {

        //显示tab
        $rootScope.changeTab("audit",2);

        //查询班级
        var loadList = function (schoolId) {
            AuditService.getUserClass(schoolId).then(function (res) {

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

        //自动查询
        var schoolId = $scope.fm.schoolId;
        if(schoolId){
            loadList();
        }

    });