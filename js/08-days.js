//Зациклить вывод дней недели таким образом: "День недели. Хотите увидеть следующий день?"


document.getElementById('counter').insertAdjacentHTML("afterbegin", '<h1><span id="day"></span></h1>');
let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let i = 0;
let calculate = function() {
    document.getElementById('day').innerText = week[i];
    i++;
    i = i % week.length;
}