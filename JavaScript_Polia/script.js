let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[1]);

fruits[1] = "Yellow";

console.log(fruits[1]);

console.log("Dlzka pola: " + fruits.length);

console.log("Vypis poslednej polozky pola: " + fruits[fruits.length - 1]);

fruits.push("Orange");  //Pridavanie do pola

console.log(fruits);

fruits.pop();    //Vyhodenie posledneho objektu z pola

console.log(fruits);

fruits.shift();  //Vyhodenie prveho prvku z pola

console.log(fruits);

fruits.unshift("Pear");  //Pridanie prvku na 0 index

console.log(fruits);

//foreach na vypisanie pola
console.log("Vypis pola foreach:");
for (let fruit of fruits){
    console.log(fruit);
}

//while na vypisanie pola
console.log("Vypis pola while:");
let i = 0;
while (i < fruits.length){
    console.log(fruits[i]);
    i++;
}

//pole vie uchovavat rozne typy hodnot
let mixed = ["Jakub", 16, false, null];
console.log(mixed);