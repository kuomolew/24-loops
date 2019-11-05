//Запросить 2 числа и найти только наибольший общий делитель.

document.getElementById('counter').insertAdjacentHTML("afterend", '<h1><span id="divider"></span></h1>');

let calculate = function() {
    let a = parseInt(document.getElementById('number-a').value);
    let b = parseInt(document.getElementById('number-b').value);
    let smaller, bigger, divider;
    if(a > 0 && b > 0) {
        if (a > b) {
            bigger = a;
            smaller = b;
        } else {
            bigger = b;
            smaller = a;
        }
        for (let i = smaller; i > 0;  i--) {
            if (smaller % i == 0 && bigger % i == 0) {
                divider = i;
                break;
            }
        }
        
    } else {
        divider = 'Please type numbers';
    }
    document.getElementById('divider').innerText = divider;
}