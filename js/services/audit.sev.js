//uc 对接

jboss

    .factory("AuditService", function ($http, $q, SERVER) {


       var Ajax = {

           //获得用户创建的班级
           getUserClass: function (areaId,schoolId) {
               var defer = $q.defer();

               areaId = areaId || "";
               schoolId = schoolId || "";

               $http.get(SERVER.url.uc + "/school/getUserCustomClass", {
                   params: {
                       schoolId : schoolId,
                       areaId  : areaId,
                       status  : ""
                   }
               })
                   .success(function (result) {
                       defer.resolve(result);
                   })
                   .error(function (err) {
                       console.error("class getList error");
                       defer.reject(err);
                   });

               return  defer.promise;
           },


           //获得用户创建的科目
           getUserSubject: function (areaId,schoolId) {
               areaId = areaId || "";
               schoolId = schoolId || "";
               var defer = $q.defer();
               $http.get(SERVER.url.uc + "/school/getUserCustomSubject",{
                   params: {
                       schoolId : schoolId,
                       areaId  : areaId,
                       status  : ""
                   }
               })
                   .success(function (result) {
                       defer.resolve(result);
                   })
                   .error(function (err) {
                       console.error("subject getList error");
                       defer.reject(err);
                   });


               return defer.promise;
           },
           //获得学校
           getSchool: function (areaId) {
               areaId = areaId || "";
               var defer = $q.defer();
               $http.get(SERVER.url.uc+"/school/getUserCustomSchool", {
                   params: {
                       areaId: areaId,
                       schoolId : "",
                       status  : ""
                   }
               })
                   .success(function (res) {
                       defer.resolve(res);
                   })
                   .error(function (err) {
                       defer.reject(err);
                   });

               return defer.promise;
           },

           audit : function(id,type,status){
               var defer = $q.defer();
               $http.get(SERVER.url.uc + "/school/audit",{
                   params : {
                       businessId : id,
                       businessType : type,
                       status   : status
                   }
               })
                   .success(function (res) {
                       defer.resolve(res);
                   })
                   .error(function (err) {
                       defer.reject(err);
                   });
               return defer.promise;
           }

       }

        return Ajax;

    });