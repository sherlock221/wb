jboss

    .controller("AuditCtrl", function ($rootScope, $scope, $state, $window, $log, $q, $timeout, AuditService) {


        //表单数据
        $scope.fm = {
            areaId: "",
            address: "",
            school: ""
        }

        //是否显示新信息
        $scope.isMsgShow = false;

        //省数据
        $scope.provices = [];
        $scope.citys = [];

        //学校数据
        $scope.schools = [];

        //学校
        $scope.isSchool = true;


        //地区进行筛选
        $scope.$watch('fm.areaId', function (areaId) {

            if (areaId) {
                console.log("area...");
                if (areaId == "-1") {
                    areaId = "";
                }
                //向子$scope 传递事件告诉可以刷新列表了
                $scope.$broadcast("audit-child", {areaId: areaId, schoolId: $scope.fm.school.schoolId});


                //非学校加载
                if (!$scope.isSchool) {
                    //加载学校列表
                    AuditService.getSchool(areaId).then(function (res) {
                        $scope.schools = res.bizData;
                    }, function (err) {

                    });
                }

            }
            else {
                $scope.showSecond = false;
            }
        });


        //学校筛选
        $scope.$watch('fm.school', function (school) {

            if (school) {
                //向子$scope 传递事件告诉可以刷新列表了
                $scope.$broadcast("audit-child", {areaId: $scope.fm.areaId, schoolId: school.schoolId});
            }
            else {
                $scope.$broadcast("audit-child", {areaId: $scope.fm.areaId, schoolId: ""});
            }

        });


        //修改学校
        $scope.updateSchool = function () {
            $scope.isMsgShow = false;
        }


        //显示学校
        $scope.showSchool = function () {
            $scope.isMsgShow = true;

        }

        $scope.selectProvice = function ($item, $model, $label) {
            console.log($item);
        }


        //审核
        $scope.auditContent = function (id, type,status) {
            AuditService.audit(id, type,status).then(function (res) {

                if(res.rtnCode == "0000000"){
                    //向子$scope 传递事件告诉可以刷新列表了
                    $scope.$broadcast("audit-child", {areaId: $scope.fm.areaId, schoolId: $scope.fm.school == "" ?  "" : $scope.fm.school.schoolId});
                }
                else{
                    alert(res.msg);
                }

            }, function (err) {
                alert("网络错误!");
            });
        }


    });