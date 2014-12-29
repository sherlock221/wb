jboss

    .controller("AuditClassCtrl", function ($rootScope,$scope, $window, $log, $q, $timeout, AuditService) {

        console.log("class..");

        //显示tab
        $rootScope.changeTab("audit",1);


        $scope.$parent.isSchool = false;


        //查询班级
        var loadList = function (data) {
            var schoolId = data.schoolId || "";
            var  areaId = data.areaId || "";

            AuditService.getUserClass(areaId,schoolId).then(function (res) {
                if(res.rtnCode != "0000000"){
                    alert(res.msg);
                }
                else{
                    $scope.results = res.bizData;
                }

            }, function (err) {
                alert("网络出错!");
            });
        }

        var schoolId;

        if(!$scope.fm.school)
            schoolId = ""
        else
            choolId = $scope.fm.school.schoolId || "";

        var areaId   = $scope.fm.areaId || "";

        //接受来自audit的事件
        $scope.$on("audit-child",function(event,data){
            console.log("子id : ",data);
            loadList(data);
        });



        //默认load
        loadList({schoolId:schoolId,areaId:areaId});

    });