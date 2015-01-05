var jboss = angular.module("jboss", [
    'ui.router',
    'ui.bootstrap',
    'frapontillo.bootstrap-switch'
]);


//启动配置
jboss.run(function () {
    console.log("run....");
});


//设置路由
jboss.config(function ($stateProvider, $urlRouterProvider) {

    /**
     * 首页
     * url  /home
     */
    $stateProvider

        .state("home", {
            url: "/home",
            abstract : true,
            templateUrl: "templates/home.html",
            controller: "HomeCtrl as home"
        })

        //audio 审核
        .state("home.audit",{
            url : "/audit",
            abstract : true,
            views : {
                "content" : {
                    templateUrl : "templates/audit/audit.html",
                    controller : "AuditCtrl as audit"
                },
                "tab" : {
                    templateUrl : "templates/nav.html",
                    controller : "tabCtrl"
                }
            }
        })

        //审核学校
        .state("home.audit.school",{
                 url : "/school",
                 templateUrl : "templates/audit/audio_school.html",
                 controller : "AuditSchoolCtrl"
        })

        //审核班级
        .state("home.audit.class",{
            url : "/class",
            templateUrl : "templates/audit/audio_class.html",
            controller : "AuditClassCtrl"
        })

        //审核科目
        .state("home.audit.subject",{
            url : "/subject",
            templateUrl : "templates/audit/audio_subject.html",
            controller : "AuditSubjectCtrl"
        })


        //测试部分
        .state("home.test", {
            url: "/test",
            views : {
                'content':{
                    templateUrl: "templates/test/removeUser.html",
                    controller: "TestCtrl as test"
                }
            }
        })

    //默认情况
    $urlRouterProvider.otherwise("/home/audit/school");

});

//常量配置
jboss.constant("SERVER", {
    url : {
//        uc  : "http://172.16.130.197:8080/v1",
        uc  : "http://10.10.68.11:8080/v1",
//        uc  : "./data",
        message : "",
        boss  : ""
    }

});

