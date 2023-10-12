// Урок 3. Объектно-ориентированное программирование в Javascript.
// Домашнее задание.
// Задание 1: "Управление персоналом компании".
// Реализуйте класс Employee (сотрудник), который имеет следующие
// свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер),
// который наследует класс Employee и имеет дополнительное
// свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает
// менеджер.
// Метод displayInfo() - переопределяет метод displayInfo()
// родительского класса и выводит информацию о менеджере (имя и отдел).
class Employee {
    name;

    displayInfo() {
        console.log(`Name: ${this.name}`);
    }

    constructor(name) {
        this.name = name;
    }
};

class Manager extends Employee {
    department;

    displayInfo() {
        console.log(`Name: ${this.name}\n` +
            `Department: ${this.department}`);
    }

    constructor(name, department) {
        super(name);
        this.department = department;
    }
}

const employee = new Employee('John Smith');
employee.displayInfo();

const manager = new Manager('Jane Doe', 'Sales');
manager.displayInfo();

// Задание 2: "Управление списком заказов".
// Реализуйте класс Order (заказ), который имеет следующие свойства
// и методы:
// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список
// продуктов в заказе.
// Метод addProduct(product) - принимает объект product и
// добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа,
// основанную на ценах продуктов.

class Order {
    orderNumber;
    products = [];

    constructor(orderNumber) {
        this.orderNumber = orderNumber;
    }

    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        return `${this.products.reduce(
            (acc, element) => acc += element.price, 0)}`;
    }
}

class Product {
    name;
    price;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(322);
console.log(order);

const product1 = new Product("creme_fraiche", 5);
console.log(product1);

const product2 = new Product("strawberries", 8);
console.log(product2);

order.addProduct(product1);
order.addProduct(product2);
console.log(order.products);

console.log(order.getTotalPrice());