//Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

//document.getElementById('counter').insertAdjacentHTML("afterend", '<h1><span id="amount"></span></h1>');

let calculate = function() {
    let numbers = document.getElementById('numbers').value;
    let positive = negative = zeroes = even = odd = 0;
    numbers = numbers.split(',');
    console.log(numbers);
    for (key in numbers) {
        numbers[key] = parseInt(numbers[key]);
        console.log(numbers[key]);
        if (numbers[key] > 0) {
            positive++;
        } else if(numbers[key] < 0) {
            negative ++;
        } else {
            zeroes++;
        }
        if (numbers[key] % 2 == 0 ) {
            even++
        } else {
            odd++;
        }
    }
    //console.log(positive, negative, zeroes, even, odd);
    //document.getElementById('amount').innerText = amount;
    document.getElementById('positive').innerText = positive;
    document.getElementById('negative').innerText = negative;
    document.getElementById('zeroes').innerText = zeroes;
    document.getElementById('even').innerText = even;
    document.getElementById('odd').innerText = odd;
}