jboss
    .controller("tabCtrl", function ($rootScope,$scope,$window,$log,$q,$timeout) {
        var tabs = {
            "test" : [
                {
                    "name" : "删除号码",
                    "url"  : "#/home/test",
                    "isActived" : true
                }
            ],
            "audit" : [
                {
                    "name" : "审核学校",
                    "url" : "#/home/audit/school",
                    "isActived" : true,
                    "id" : 0
                },
                {
                    "name" : "审核班级",
                    "url" : "#/home/audit/class",
                    "isActived" : false,
                    "id" : 1
                },
                {
                    "name" : "审核科目",
                    "url" : "#/home/audit/subject",
                    "isActived" : false,
                    "id" : 2
                }
            ]
        }


        //左侧列表
        $rootScope.tabs = [];
        //修改tab列表
        $rootScope.changeTab = function(key,id){
            $rootScope.tabs = tabs[key];
            angular.forEach($rootScope.tabs,function(value,index){
                if(value.id == id){
                    value.isActived = true;
                }
                else{
                    value.isActived = false;
                }
            });
        }

    });