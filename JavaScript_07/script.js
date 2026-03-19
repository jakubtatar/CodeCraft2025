let element = document.getElementById("title");
console.log(element);

element.textContent = 0;

let btn = document.querySelector("button");
console.log(btn);

let pocetklikov = 0;

btn.addEventListener("click", function () {
    console.log("Kirk");
    pocetklikov++;
    element.textContent = pocetklikov;
});

let hiddenBtn = document.getElementById("hiddenBtn");
let secrettext = document.getElementById("secretText");

hiddenBtn.addEventListener("click", function () {
    if (secrettext.style.display == "none"){
        secrettext.style.display = "block";
    }
    else{
       secrettext.style.display = "none"; 
    }
    
});


