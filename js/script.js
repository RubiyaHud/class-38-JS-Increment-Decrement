let countNumber = document.querySelector("#countNumber")//Get the html tag by id 
//console.log(countNumber);//Prints the whole html tag 
//console.log(countNumber.innerHTML); //Only prints the inner text of the html tag
// let x = document.querySelector("h1");//Get the html tag by tag-name
// console.log(x);//Prints the whole html tag  


let incrementBtn = document.querySelector(".incrementBtn");//Get the html tag by class name
let decrementBtn = document.querySelector(".decrementBtn");

//let count = 0;
let count = countNumber.innerHTML;
incrementBtn.addEventListener("click", function () {
    if (count >= 0 && count < 10) {  
        count++;      
        console.log(count);
        countNumber.innerHTML = count;
    }
})

decrementBtn.addEventListener("click", function () {
    count = countNumber.innerHTML;    
    if (count >= 1) {
        count--;      
        console.log(count);
        countNumber.innerHTML = count;
    }

})