// 1.

function defUpperStr(text = 'default text') {
    return text.toUpperCase();
}


// 2.

function evenFn (n) {
    const evenArray = [];

    for (let i = 2; i <= n; i += 2) {
        evenArray.push(i);
    }
    return evenArray;
}


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