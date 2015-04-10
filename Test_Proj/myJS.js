/**
 * Created by Ovais on 4/10/15.
 */

var username, password, login = angular.Module("loginModule",[]);

login.controller("myLogin",function($scope){
    if(Sscope.name == "ovais") {
        alert("Welcome user!");
    }
        else{
            alert("wrong username or password");
        }

});