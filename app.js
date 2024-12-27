// 1.

let text = prompt('Введите текст')

function defUpperStr(text = 'default text') {
    return text.toUpperCase();
}

console.log(defUpperStr(text));

// 2.

function evenFn (n) {
    const evenArray = [];

    for (let i = 2; i <= n; i += 2) {
        evenArray.push(i);
    }
    return evenArray;
}

console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));


// 3.

function weekFn(n) {
    switch (true) {
        case (Number.isInteger(n) && n === 1) :
            return "Понедельник";
        case (Number.isInteger(n) && n === 2) :
            return "Вторник";
        case (Number.isInteger(n) && n === 3) :
            return "Среда";
        case (Number.isInteger(n) && n === 4) :
            return "Четверг";
        case (Number.isInteger(n) && n === 5) :
            return "Пятница";
        case (Number.isInteger(n) && n === 6) :
            return "Суббота";
        case (Number.isInteger(n) && n === 7) :
            return "Воскресенье";
        default:
            return null;
    }
}

console.log(weekFn(1))
console.log(weekFn(3))
console.log(weekFn(7))
console.log(weekFn(9))
console.log(weekFn(1.5))
console.log(weekFn('2'))


// 4.

function ageClassification(n) {

    if (n <= 0 || n > 122) {
        return null;
    }

    switch (true) {
        case (n > 0 && n <= 24):
            return "Детство";
        case (n > 24 && n <= 44):
            return "Молодость";
        case (n > 44 && n <= 65):
            return "Зрелость";
        case (n > 65 && n <= 75):
            return "Старость";
        case (n > 75 && n <= 90):
            return "Долгожитель";
        case (n > 90 && n <= 122):
            return "Рекорд";
        default:
            return null;
    }
}


console.log('    -1 :', ageClassification(-1)) // -1 : null
console.log('     0 :', ageClassification(0)) // 0 : null
console.log('     1 :', ageClassification(1)) // 1 : Дитинство
console.log('    24 :', ageClassification(24)) // 24 : Дитинство
console.log(' 24.01 :', ageClassification(24.01)) // 24.01 : Молодість
console.log('    44 :', ageClassification(44)) // 44 : Молодість
console.log(' 44.01 :', ageClassification(44.01)) // 44.01 : Зрілість
console.log('    65 :', ageClassification(65)) // 65 : Зрілість
console.log('  65.1 :', ageClassification(65.1)) // 65.1 : Старість
console.log('    75 :', ageClassification(75)) // 75 : Старість
console.log(' 75.01 :', ageClassification(75.01)) // 75.01 : Довголіття
console.log('    90 :', ageClassification(90)) // 90 : Довголіття
console.log(' 90.01 :', ageClassification(90.01)) // 90.01 : Рекорд
console.log('   122 :', ageClassification(122)) // 122 : Рекорд
console.log('122.01 :', ageClassification(122.01)) // 122.01 : null
console.log('   150 :', ageClassification(150)) // 150 : null