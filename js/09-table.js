//Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.


// document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>Result: <span id="result"></span></h1>');
let ids = ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let calculate = function() {
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(`${ids[i]}`).insertAdjacentHTML("afterbegin", `<li><span>${i+2}</span></li>`);
        for (let j = 1; j <= 10; j ++) {
        document.getElementById(`${ids[i]}`).insertAdjacentHTML("beforeend", `<li>${i+2} x ${j} = <span>${(i+2)*j}</span></li>`);
        }
    }
}