function findFakeCoin(fakeCoin, isHeavy){

    fakeCoin = Number(document.getElementById('inputNumber').value);
    isHeavy = document.getElementById('inputHeavier').checked;

    if (fakeCoin < 1 || fakeCoin > 12 || isNaN(fakeCoin)){
        alert("Please enter a valid coin number between 1 and 12.");
        return;
    } 
    
    console.log("User input: Coin " + fakeCoin + " isHeavy = " + isHeavy);

    //Sposoby akymi zapisat pole
    const coins = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const array = Array.from({length: 12}, (_, i) => i + 1);
    const moreCoins = [];
    for (let i = 1; i <= 12; i++){
        moreCoins.push(i);
    }

    //Ide vazit dve strany
    function weight(left, right){
        let leftweight = 0;
        let rightweight = 0;

        for (let coin of left){
            if (coin === fakeCoin){
                leftweight += isHeavy ? 2 : 0.5 //Ak je tazsia prida 2, ak lahsia tak prida 0.5
            }
            else{
                leftweight++;
            } 
        }

        for (let coin of right){
            if (coin === fakeCoin){
                rightweight += isHeavy ? 2 : 0.5 //Ak je tazsia prida 2, ak lahsia tak prida 0.5
            }
            else{
                rightweight++;
            } 
        }

        if (leftweight > rightweight) return "Left is heavier";
        if (rightweight > leftweight) return "Right is heavier";
        return "Balanced";
    }

    console.log("=== First weighting ===");
    let result1 = weight([1, 2, 3, 4], [5, 6, 7, 8]);
    console.log("Result of first weighting [1, 2, 3, 4] vs [5, 6, 7, 8]: " + result1)
    if (result1 === "Balanced"){
        console.log("The fake coin is among [9, 10, 11, 12]");

        let result2 = weight([9, 10], [11, 12]);
        console.log("Result of second weighting [9, 10] vs [11, 12]: " + result2)
        if (result2 === "Right is heavier"){
            console.log("The fake coin is " + (isHeavy ? "12" : "11"));
        }
        else if (result2 === "Left is heavier"){
            console.log("The fake coin is " + (isHeavy ? "10" : "9"));
        }
    }

    console.log("=== Second weighting ===");
    let result2 = weight([1, 2, 3, 4], [9, 10, 11, 12]);
    console.log("Result of second weighting [1, 2, 3, 4] vs [9, 10, 11, 12]: " + result2)
    if (result2 === "Balanced"){
        console.log("The fake coin is among [5, 6, 7, 8]");
    }

    console.log("=== Third weighting ===");
    let result3 = weight([5, 6, 7, 8], [9, 10, 11, 12]);
    console.log("Result of third weighting [5, 6, 7, 8] vs [9, 10, 11, 12]: " + result3)
    if (result3 === "Balanced"){
        console.log("The fake coin is among [1, 2, 3, 4]");
    }

    outputWindow = document.getElementById('output');
    outputWindow.innerHTML = "<p>Result of first weighting [1, 2, 3, 4] vs [5, 6, 7, 8]: " + result1 + "</p>" +
                             "<p>Result of second weighting [1, 2, 3, 4] vs [9, 10, 11, 12]: " + result2 + "</p>" +
                             "<p>Result of third weighting [5, 6, 7, 8] vs [9, 10, 11, 12]: " + result3 + "</p>";
}