var myApp = angular.module("myApp", []);
myApp.controller("titleCntrl", function ($scope) {
    $scope.titleMessage = "Surf Information";
  });

chrome.runtime.sendMessage({type: 'from_popup'}, (response) => {
    // do stuff with response (which will be the value of messageQueue
    // sent from background.js).
    // $("#title").text(response);
        $("h3").append(response);
        // $("#textArea").append(response);
    });
    
    
chrome.runtime.sendMessage({type: 'second'}, (response) => {
        
});