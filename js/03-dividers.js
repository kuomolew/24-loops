//Запросить у пользователя число и вывести все делители этого числа.

document.getElementById('counter').insertAdjacentHTML("afterend", '<h1><span id="dividers"></span></h1>');

let calculate = function() {
    let number = parseInt(document.getElementById('number').value);
    let dividers = [];
    if(number > 0) {
        for (let i = 1; i <= number; i++) {
            if (number % i == 0) {
                dividers.push(i);
            }
        }
        
    } else {
        dividers = 'Please type the number';
    }
    document.getElementById('dividers').innerText = dividers;
}