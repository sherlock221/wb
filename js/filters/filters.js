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

    });