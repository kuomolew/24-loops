//Подсчитать сумму всех чисел в заданном пользователем диапазоне.

document.getElementById('counter').insertAdjacentHTML("afterend", '<h1><span id="sum"></span></h1>');

let calculate = function() {
    let a = parseInt(document.getElementById('number-a').value);
    let b = parseInt(document.getElementById('number-b').value);
    let smaller, bigger, sum;
    if(a && b) {
        if (a > b) {
            bigger = a;
            smaller = b;
        } else {
            bigger = b;
            smaller = a;
        }
        sum = 0;
        for (let i = smaller; i <= bigger; i ++) {
            sum = sum + i;
        }
        
    } else {
        sum = 'Please type numbers';
    }
    document.getElementById('sum').innerText = sum;
}