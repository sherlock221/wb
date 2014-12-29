jboss

    .controller("AuditSchoolCtrl", function ($rootScope,$scope, $window, $log, $q, $timeout,AuditService) {

        console.log("school...")


        $scope.$parent.isSchool = true;

        //显示tab
        $rootScope.changeTab("audit",0);

        //查询班级
        var loadList = function (data) {

           var  areaId = data.areaId || "";



            //查询全部学校
            AuditService.getSchool(areaId).then(function (res) {
                if(res.rtnCode != "0000000"){
                    alert(res.msg);
                }
                else{

                    $scope.results = res.bizData;

                }


            }, function (err) {
                alert("服务器连接失败!");
            });

        }

        //接受来自audit的事件
        $scope.$on("audit-child",function(event,data){
            console.log("子id : ",data);
            loadList(data);
        });


        loadList({});
    });