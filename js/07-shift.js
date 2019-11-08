//Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат

document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>Result: <span id="result"></span></h1>');

let calculate = function() {
    let number = document.getElementById('number').value;
    let shift = parseInt(document.getElementById('shift').value);
    let result = '';
    
    
    if(number > 0  && shift >= 0) {
        console.log(`number.length = ${number.length}`);
        shift = (shift % number.length);
        if (shift == 0) {
            result = number;
        }
        if (result == '') {
            for (let i = shift; i < number.length; i++) {
                console.log(`number[${i}] = ${number[i]}`);
                result = result + number[i];
            }
            for (let i = 0; i < shift; i++) {
                result = result + number[i];
            }
        }
        
    }  else {
        result = 'type valid values';
    }
    document.getElementById('result').innerText = result;
}