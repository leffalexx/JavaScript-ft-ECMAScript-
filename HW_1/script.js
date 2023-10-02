// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9]
console.log(Math.min(...arr))

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами:
// increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement
// должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

const createCounter = (function externalCounter() {
    let count = 0;
    return {
        increment: function innerCounterIncrement() {
            return ++count;
        },
        decrement: function innerCounterDecrement() {
            return --count;
        }
    }
}())

console.log(createCounter.increment());
console.log(createCounter.decrement());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса
// в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

function findElementByClass(argElement, argClass) {
    let result = '';
    for (let i = 0; i < argElement.children.length; i++) {
        if (argElement.children[i].className === argClass) {
            return argElement.children[i];
        }
        else if (argElement.children[i].length !== 0) {
            result = findElementByClass(argElement.children[i], argClass);
            if (result) return result;
        }
    }
}

const rootElement = document.querySelector('html')
const findElement = findElementByClass(rootElement, 'label__motto');
console.log(findElement);