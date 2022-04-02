'use strict';


// Запросить у пользователя число, если число является простым то выводим в консоль true иначе false
//
// Простое число — целое положительное число, имеющее ровно два различных натуральных делителя — единицу и самого себя. Например, 7 — простое число, потому что делится без остатка только на 1 и на себя. 2017 — другое простое число.
//
// Используйте цикл for .
//
// Примеры:
//
// 1; // false
// 7; // true
// 10; // false


let num = +prompt('Введите число');

let deliteli = [];
let max =num/2;

if (num % 1 === 0) {

    deliteli.push(1);
    num =Math.round(num / 1);

    for (let i=2; i<= max; i++) {
        if (num % i === 0) {
            deliteli.push(1 * i);
        }
    }
    deliteli.push(1 * num);
}

console.log(deliteli);    // Вывод количества делителей введеного числа

if (deliteli[0] !== num){
// Обертка - это проверка на 1 , если не сделать - выведет для единицы 2 делителя, а
//     по условию задачи 1 - это false
//
    if (deliteli.length>2  ){
        console.log(`${num} // false`);
    } else {
        console.log(`${num} // true`);
    }

} else {
    console.log(`${num} // false`);
}



