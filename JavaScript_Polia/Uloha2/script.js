const numbers = [4, 8, 15, 16, 23, 42]

console.log("Uloha 1a")
for (let num of numbers){
    console.log(num)
}

console.log("Uloha 1b")
let num = 0
while (num < numbers.length){
    console.log(numbers[num])
    num++
}

console.log("Uloha 2")
num = 0
while (num < numbers.length){
    console.log("Index: " + num + " : " + numbers[num])
    num++
}

console.log("Uloha 3")
num = numbers.length -1
while (num >= 0){
    console.log(numbers[num])
    num--
}

console.log("Uloha 4")
sum = 0
for (let num of numbers){
    sum += num
}
console.log(sum)

console.log("Uloha 5")
isEven = 0
for (let num of numbers){
    let modulo = num % 2
    if (!modulo){
        console.log(num + " is even")
        isEven++
    }
}
console.log("There are " + isEven + " even numbers in array.")

console.log("Uloha 6")
numbers.sort((a, b) => a - b)
console.log("Najvecsie cislo: " + numbers[numbers.length-1])
console.log("Najmensie cislo: " + numbers[0])
console.log(numbers)

console.log("Uloha 7")
let ranNums = []
for (let i = 0; i < 10; i++){
    let ran = Math.floor(Math.random() * 100) + 1
    ranNums.push(ran)
}
console.log(ranNums)

ranNums.sort((a, b) => a - b)
console.log(ranNums)

console.log("Uloha 8")
let ranNums2 = []
for (let i = 0; i < 10; i++){
    let ran = Math.floor(Math.random() * 100 -50)
    ranNums2.push(ran)
}
console.log(ranNums2)

ranNums2 = ranNums2.filter(num => num >= 0);
ranNums2.sort((a, b) => a - b)
console.log(ranNums2);