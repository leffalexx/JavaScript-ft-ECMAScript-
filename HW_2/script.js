// Задание 1: ""Управление библиотекой книг""
// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    title;
    author;
    pages;
    displayInfo() {
        console.log(
            `Название: ${this.title}\n` +
            `Автор: ${this.author}\n` +
            `Страниц: ${this.pages}`);
    };
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

const testbook = new Book('Неудобное прошлое', 'Николай Эппле', 576);

testbook.displayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

class Student {
    name;
    age;
    grade;
    displayInfo() {
        console.log(
            `Name: ${this.name}\n` +
            `Age: ${this.age}\n` +
            `Grade: ${this.grade}\n`);
    }
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}

const student1 = new Student("John Doe", 16, "10th grade");
student1.displayInfo();
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();