let input = document.getElementById("input");
let input_fibonacci = document.getElementById("input_fibonacci");
let input_charcode = document.getElementById("input_charcode");
let output = document.getElementById("output");
let fibonacci = document.getElementById("fibonacci");
let charcode = document.getElementById("charcode");

// function for an array with odds numbers
function generateOddsNumbers(input) {
    let oddNumber = 1;
    let newArr = [];
    for (let i = 1; i <= input; i++) {
        newArr.push(oddNumber);
        oddNumber += 2;
    }
    return newArr;
}
window.addEventListener("keyup", function(e) {
    if (e.key == "Enter") {
        generateOddsNumbers(input);
        output.innerHTML += generateOddsNumbers(input.value) + "<br> ";
        console.log(generateOddsNumbers(input.value));
    }
});

//function for an array with fibonacci numbers 
let i;
let fib = [];
let arr = [];

function fibo(input_fibonacci) {
    for (i = 2; i <= input_fibonacci; i++) {
        fib[0] = 0;
        fib[1] = 1;
        fib[i] = fib[i - 2] + fib[i - 1];
        arr.push(fib[i])
    }
    return arr;
}
window.addEventListener("keyup", function(e) {
    if (e.key == "Enter") {
        fibo(input_fibonacci);
        fibonacci.innerHTML += fibo(input_fibonacci.value) + "<br> ";
        console.log(fibo(input_fibonacci.value));
    }
});

let alphabet = [];
let key = input_charcode;
let index = [];

function fill(key) {
    for (let i = 65; i <= 90; i++) {
        alphabet.push(String.fromCharCode(i));
        index = alphabet[key];
        result = alphabet.slice(0, key)
    }
    // console.log(alphabet);
    return alphabet;
}

window.addEventListener("keyup", function(e) {
    if (e.key == "Enter") {
        fill(key.value)
        charcode.innerHTML += result + "<br>";
        // console.log(index);
    }
});
