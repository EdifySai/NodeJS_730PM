const http = require('http');
var str= "nodejs is async, event driven, non blocking io"; 
var arr = str.split(" ");

var finalStr = "";

for(var i=0; i<arr.length;i++){
        var element =arr[i];
        var newElement = "";
        for(var j=element.length-1; j >= 0; j--){
            newElement += element[j];
        }
        finalStr =  finalStr + " "+newElement;
}
console.log(finalStr);