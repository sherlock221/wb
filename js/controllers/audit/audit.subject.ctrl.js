jboss

    .controller("AuditCtrl", function ($rootScope,$scope,$window,$log,$q,$timeout) {

        //审核
        $scope.results = [];


        $scope.fm = {
            provice : "",
            area  : "",
            city : ""
        }

        //是否显示新信息
        $rootScope.isMsgShow = false;


        //修改学校
        this.updateSchool = function(){
            $rootScope.isMsgShow = false;
        }


        //显示学校
        this.showSchool = function(){
            $rootScope.isMsgShow = true;
        }

    });