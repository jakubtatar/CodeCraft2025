//Uroven 1
console.log("Uroven 1, 1");
for (let i = 1; i <= 10; i++){
    console.log(i);
}

console.log("Uroven 1, 2");
for (let i = 5; i <= 15; i++){
    console.log(i);
}

console.log("Uroven 1, 3");
for (let i = 10; i >= 1; i--){
    console.log(i);
}

console.log("Uroven 1, 4");
for (let i = 0; i <= 20; i++){
    console.log(i);
}

console.log("Uroven 1, 5");
for (let i = 1; i <= 5; i++){
    console.log("JavaScript");
}

//Uroven 2
console.log("Uroven 2, 6");
for (let i = 0; i <= 20; i++){
    let modulo = i % 2
    if (!modulo && i != 0){
        console.log(i)
    }
}

console.log("Uroven 2, 7")
for (let i = 0; i <= 20; i++){
    let modulo = i % 2;
    if (modulo && i != 0){
        console.log(i);
    }
}

console.log("Uroven 2, 8")
for (let i = 0; i <= 20; i+=2){
    console.log(i);
}

console.log("Uroven 2, 9")
for (let i = 20; i >= 0; i-=2){
    console.log(i);
}

console.log("Uroven 2, 10")
for (let i = 0; i <= 100; i+=10){
    console.log(i);
}

//Uroven 3
console.log("Uroven 3, 11")
for (let i = 1; i <= 20; i++){
    let modulo = i % 3
    if (!modulo){
        console.log(i)
    }
}

console.log("Uroven 3, 12")
for (let i = 1; i <= 30; i++){
    if (i > 10){
        console.log(i)
    }
}

console.log("Uroven 3, 13")
for (let i = 1; i <= 50; i++){
    let modulo = i % 2
    if (!modulo){
        console.log(i)
    }
}

console.log("Uroven 3, 14")
for (let i = 1; i <= 20; i++){
    let modulo = i % 5
    if (modulo){
        console.log(i)
    } 
}

console.log("Uroven 3, 15")
for (let i = 1; i <= 100; i++){
    let modulo = i % 4
    if (i < 50 && !modulo){
        console.log(i)
    }
}

//Uroven 4
console.log("Uroven 4, 16")
let sum = 0
for (let i = 1; i <= 10; i++){
    sum += i
}
console.log(sum)

console.log("Uroven 4, 17")
sum = 0
for (let i = 1; i <= 20; i++){
    let modulo = i % 2
    if (!modulo){
            sum += i
    }
}
console.log(sum)

console.log("Uroven 4, 18")
let count = 0
for (let i = 1; i <= 100; i++){
    let modulo = i % 7
    if (!modulo){
        count++
    }
}
console.log(count)

console.log("Uroven 4, 19")
let maxnumber = 0
for (let i = 1; i <= 50; i++){
    let modulo = i % 6
    if (!modulo){
        maxnumber = i
    }
}
console.log(maxnumber)

console.log("Uroven 4, 20")
sum = 1
for (let i = 1; i <= 5; i++){
    sum *= i
}
console.log(sum)

console.log("BONUS")
let cisla = []
for (let i = 1; i <= 6; i++){
    cisla += i
    console.log(cisla)
}

console.log("BONUS 2")
let cisla2 = "     "
for (let i = 1; i <= 6; i++){
    cisla2 += (i)
    console.log(cisla2)
}