//зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить хочет ли он решить еще один пример. И так до тех пор пока пользователь не откажется

document.getElementById('counter').insertAdjacentHTML("afterend", '<h1>Result: <span id="result"></span></h1>');

let calculate = function() {
    let a = parseFloat(document.getElementById('number-1').value);
    let b = parseFloat(document.getElementById('number-2').value);
    let math = document.getElementById('math').value;
    let result;
    if(b==0 && math=='divide') {
        result = 'Nizzia!';
    } else {
        if (math == 'plus'){
            result = a + b;
        } else if (math == 'minus') {
            result = a - b;
        } else if (math == 'multiply') {
            result = a * b;
        } else {
            result = a / b;
        }
    }
    document.getElementById('result').innerText = result;
}