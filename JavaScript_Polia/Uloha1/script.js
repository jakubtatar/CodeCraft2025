let jedla = ["Rezen", "Halusky", "Pho", "Pizza", "Sushi"];
console.log(jedla)
console.log("Prve: " + jedla[0] + " Posledne: " + jedla[jedla.length-1])
jedla.push("Kura");
console.log(jedla)
jedla.shift()
console.log(jedla)
console.log("Dlzka pola: " + jedla.length)

for (let jedlo of jedla){
    console.log(jedlo)
}