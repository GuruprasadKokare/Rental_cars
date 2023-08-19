// function category(){
// var carcategory = document.getElementById("cartype").value
// var carname = document.getElementById("carname");

// if (carcategory == "suv") {
//     carname

//  function populate(s1,s2){
//     var s1= document.getElementById(slct1);
//     var s2 = document.getElementById(slct2);

//     s2.innerHTML ="";

//     if(s1.value == "all"){
//         var optionArray = ['Hyundai i20 | i20','Tata Nexon | nexon','Tata Altroz | altroz','Creta SUV | suv','Mahindra Scorpio | scorpio','Audi Premium | audi'];
//     }

//     else if(s1.value == "small"){
//         var optionArray = ['Hyundai i20 | i20','Tata Nexon | nexon','Tata Altroz | altroz'];

//     }
//     for(var option in optionArray){
//         var pair = optionArray[option].split("|")
//         var newoption= document.createElement("option");
//         newoption.value= pair[0];
//         newoption.innerHTML=pair[1];
//         s2.option.add(newoption);
//     }

// }

let all = ["Hyundai i20","Wagnor", "Tata Nexon", "Tata Altroz","Creta SUV","Mahindra Scorpio","Audi Premium","MG Hector","Ertiga XUV","Mahindra Thar"];
let small = ["Hyundai i20", "Wagnor"];
let full= [ "Scorpio", "MG Hector","Creta SUV"];
let prem = ["Audi Premium"];
let xuv= ["Ertiga","Scorpio","Enova"];
let offroad = ["Mahindra Thar"];

let slct1 = document.getElementById("slct1");
let slct2 = document.getElementById("slct2");

all.forEach(function addCar(item) {
    let option = document.createElement("option");
    option.text = item;
    option.value = item;
    slct2.appendChild(option)
}
);

slct1.onchange = function () {
    slct2.innerHTML = "<option></option>";
    if (this.value == "all") {
        addToSlct2(all);
    }
    if (this.value == "small") {
        addToSlct2(small);
    }
    if (this.value == "full") {
        addToSlct2(full);
    }
    
    if (this.value == "prem") {
        addToSlct2(prem);
    }
    if (this.value == "xuv") {
        addToSlct2(xuv);
    }
    if (this.value == "offroad") {
        addToSlct2(offroad);
    }
    

    function addToSlct2(arr) {
        arr.forEach(function (item) {
            let option = document.createElement("option")
            option.text = item;
            option.value = item;
            slct2.appendChild(option)
        });
    }

}
