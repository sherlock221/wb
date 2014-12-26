//uc 对接

jboss

    .factory("AuditService", function ($http, $q, SERVER) {

        return {

            //获得用户创建的班级
            getUserClass: function (schoolId) {
                var defer = $q.defer();
                $http.get(SERVER.url.uc + "/school/getUserCustomClass", {
                    data: {
                        schoolId : schoolId
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
            getUserSubject: function (schoolId) {
                var defer = $q.defer();
                $http.get(SERVER.url.uc + "/school/getUserCustomSubject",{
                    data: {
                        schoolId : schoolId
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
            }


        }


    });