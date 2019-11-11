//Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.


let nGuessed = false;
let nMax = 100;
let nMin = 0;
let n;
while (!nGuessed) {
    n = Math.round((nMax + nMin)/2);
    console.log(`My guess is ${n}`);
    console.log(`If your number is bigger type 1`);
    console.log(`If your number is smaller type 2`);
    console.log(`If your number is ${n} type 3`);
    let answer = prompt('Please give your answer');
    if (answer == '1') {
        console.log(answer);
        nMin = n;
    } else if (answer == '2') {
        nMax = n;
    } else if (answer == '3') {
        console.log('Yes!');
        nGuessed = true;
    } else {
        answer = prompt('Please give your answer');
    }
}
console.log('Finish');