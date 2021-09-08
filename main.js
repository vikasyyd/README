'use strict';
const fs = require('fs');

let rawdata = fs.readFileSync('data.json');
let arr = JSON.parse(rawdata);

for(var i in arr){
    var ht = arr[i].HeightCm / 100;
    arr[i]["BMI"] = arr[i].WeightKg / (ht*ht);
    arr[i]["BMI"] = arr[i]["BMI"].toFixed(2);
    getBMIInfo(arr[i]);
}
var count = 0;
for(var i in arr){
    console.log(arr[i]);
    if(arr[i].category == "Overweight")
        count++;
}
console.log("Overweight People Count : ", count);
function getBMIInfo(obj) {
    if(obj.BMI > 40)
        obj["category"] = "Very severely obese";
    else if(obj.BMI > 35)
        obj["category"] = "Severely obese";
    else if(obj.BMI > 30)
        obj["category"] = "Moderately obese";
    else if(obj.BMI > 25)
        obj["category"] = "Overweight";
    else if(obj.BMI > 18.5)
        obj["category"] = "Normal Weight";
    else
        obj["category"] = "Underweight";
}
