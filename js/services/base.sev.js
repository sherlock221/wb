jboss

    .factory("BaseService", function ($http, $q, SERVER) {

        return {


            //获得省市区
            getArea: function () {
                var defer = $q.defer();
                if (!SERVER.area) {
                    $http.get("./data/area.json", {
                    })
                        .success(function (result) {

                            var newres = result.map(function (obj, index, array) {
                                return obj.proviceName;
                            });

                            SERVER.area = newres;

                            defer.resolve(newres);
                        })
                        .error(function (err) {
                            console.error("area getList error");
                            defer.reject(err);
                        });

                }
                else {
                    defer.resolve(SERVER.area);
                }


                return  defer.promise;
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
            }

        }


    });