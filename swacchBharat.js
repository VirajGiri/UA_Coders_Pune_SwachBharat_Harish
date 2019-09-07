var swachBharat = angular.module('swacchBharat', [])
    .controller('complaintController', function($scope, $http, $window, $location) {

        $scope.comaplainReg = function () {
            console.log("data",$scope.complaintData);



          /*  if(ValidateEmail($scope.complaintData.Email)== true){*/
                console.log("data",$scope.complaintData);

                var getUserByRoleUrl = 'http://localhost:3000/addUserEnquiry';
                $http.post(getUserByRoleUrl, $scope.complaintData, {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-access-token': $window.localStorage['token']
                    }
                }).then(function (res) {
                    $scope.CounsellorsList = res.data;
                   if(res){
                       $location.href = 'thankyou.html';
                   }
                });

            // }

        }
        function ValidateEmail(mail)
        {
            if (/^[\p{Devanagari}*a-z0-9](\.?[\p{Devanagari}*a-z0-9_-]){0,}@[\p{Devanagari}*a-z0-9-]+\.([\p{Devanagari}*a-z]{1,6}\.)?[\p{Devanagari}*a-z]{2,6}$/.test(mail))
            {
                return (true)
            }
            alert("You have entered an invalid email address!");
            return (false)
        }


       var data =  enableTyping(new Array('name','email','phone','txtarea'), null, 'NAME', "mar");
        console.log("data",data);

    });

