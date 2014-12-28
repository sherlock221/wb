jboss

    .controller("AuditCtrl", function ($rootScope,$scope,$state,$window,$log,$q,$timeout,BaseService) {



        //表单数据
        $scope.fm = {
            areaId   : "",
            address : "",
            school : ""
        }

        //是否显示新信息
        $scope.isMsgShow = false;

        //省数据
        $scope.provices =[];
        $scope.citys = [];


        //学校数据
        $scope.schools = [];

        $scope.showSecond = false;

        //加载学校
        $scope.$watch('fm.areaId', function(areaId) {
            console.log("area...");
            if(areaId){
                $scope.showSecond = true;
                BaseService.getSchool(areaId).then(function(res){
                    $scope.schools = res.bizData;

                },function(err){
                    console.log(err);
                });
            }
            else{
                $scope.showSecond = false;
            }

        });


        //修改学校
        this.updateSchool = function(){
            $scope.isMsgShow = false;
        }


        //显示学校
        this.showSchool = function(){
            $scope.isMsgShow = true;
                        
        }


        this.selectProvice = function($item, $model, $label){
            console.log($item);
        }

    });