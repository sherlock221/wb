jboss

.filter("status",function(){
        return function(status) {
           if(status == 0){
               return "未审核";
           }
            else{
               return "已审核";
           }
        };
    })

.filter("userType",function(){
    return function(userType) {
        if(userType == 0){
            return "老师";
        }
        else{
            return "家长";
        }
    };

});