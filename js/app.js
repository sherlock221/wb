var jboss = angular.module("jboss", [
    'ui.router'
//    'ui.bootstrap'
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
        .state("audit",{
            url : "/audit",
            abstract : true,
            templateUrl : "templates/audit/audit.html",
            controller : "AuditCtrl as audit"
        })


        //审核学校
        .state("audit.class",{
                url : "/class",
                templateUrl : "templates/audit/audio_class.html"
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
    $urlRouterProvider.otherwise("/home/test");

});

//常量配置
jboss.constant("SERVER", {
    url : {
        uc  : "",
        message : "",
        boss  : ""
    }

});
