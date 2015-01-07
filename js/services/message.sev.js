jboss

    .factory("MessageService",function($http,$q,SERVER){

        return {

            deletePhone : function(phone){
                var defer =  $q.defer();

                $http.get(SERVER.url.message+"/message/deleteUserByPhone?token=&phone="+phone)
                    .success(function(result){
                        defer.resolve(result);
                    })
                    .error(function(err){
                        console.error("MessageService getList error");
                        defer.reject(err);
                    });
                return  defer.promise;
            }


        }


    });