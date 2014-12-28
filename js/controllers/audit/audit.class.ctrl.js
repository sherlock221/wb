jboss

    .controller("AuditClassCtrl", function ($rootScope,$scope, $window, $log, $q, $timeout, AuditService) {

        console.log("class..");



        //显示tab
        $rootScope.changeTab("audit",1);

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
        var schoolId = $scope.$parent.fm.school.schoolId;
        if(schoolId){
            loadList(schoolId);
        }

        //监听父类变化
        $scope.$parent.$watch("isMsgShow",function(res){

            if($scope.$parent.fm.school){
                loadList($scope.$parent.fm.school.schoolId);
            }
        });

    });