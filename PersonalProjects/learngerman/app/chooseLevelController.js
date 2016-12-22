angular.module('learn-german.controllers')
        .controller('ChooseLevelController', ['$scope','$location', 'user', function($scope, $location, user){
            //VARIABLES

            $scope.isShown = false


            //FUNCTIONS

            //Function for the typing-of-string effect
            //TYPED.JS is used as additional library

            $(function(){
                $(".level-text").typed({
                    strings: ["Good! We Are Going To Play A Simple Game In 3 Rounds.<br />Choose Your Level!"],
                    typeSpeed: 0,
                    onStringTyped: function() {
                        $scope.isShown = true
                        $scope.$apply()
                    }
                })
            })

            //Set the chosen level and proceed to the next view
            $scope.chooseLevel = function(event) {
                var id = $(event.target).attr('id')
                console.log('here')
                if (id == "btn-beginner") {
                    user.level = 'Beginner'
                    user.levelNumerical = '1'
                } else if (id == "btn-intermediate") {
                    user.level = 'Intermediate'
                    user.levelNumerical = '2'
                } else {
                    user.level = 'Advanced'
                    user.levelNumerical = '3'
                }
                
                $location.path("rules")
            }

    }])