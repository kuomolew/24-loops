//Определить количество цифр в введенном числе.

document.getElementById('counter').insertAdjacentHTML("afterend", '<h1><span id="amount"></span></h1>');

let calculate = function() {
    let number = document.getElementById('number').value;
    let amount;
    if(number > 0) {
        amount = number.length;
        
    } else {
        amount = 'Please type the number';
    }
    document.getElementById('amount').innerText = amount;
}