 function  sum(a, b, c){
console.log(a + b + c);
}
sum (3, 4, 5);

function rectangleArea (x1, x2){
	console.log(x1 * x2);
}
rectangleArea(2, 8);
rectangleArea(4, 5)

for (let  a = 1; a <=10; a++){
	console.log(a)
}

//массивы 
let example = [4, 5, 6, 2, 1, 9];
console.log(example);
let result = 0;
for (let i =0; i < example.length; i++){
	result = result + example[i]
}
console.log(result);


//обьекты
let example1 = {};
let joldosh = { 
	name: "Joldosh",
	 age: 22,
	 isEmployed: false
	};
	//view, edit, add
	console.log(joldosh.name);


	let example2 ={};
	let medina ={
		name: "Medina",
		age: "17",
		height: 1.60,
		hobby: "read",
		book: "nike",
		sayHello: function() {
			console.log("hello, I'm " +this.name);
		},
		sayAge: function () {
			console.log("I'm 17 " +this.age);
		},
		
	}

	//view, edit, add
	console.log(medina.name);
	 medina.age =17;
	 console.log(medina.age );
	 medina.favouriteBooks =["Cindirella", "Harry Potter"];
	 console.log(medina.favouriteBooks =["Cindirella", "Harry Potter"]);
  


  //delete
	 delete medina.favouriteBooks;

	 medina.sayHello();
	 medina.name = "medo";
	 medina.sayHello();
	 medina.sayAge ();
	 
  

	 let example3 = {
		number: 0,
		inc: function(){
			this.number = this.number +1;
		},
		add: function(num){
			this.number = this.number + num;
		},
		subtract: function(num){
			this.number = this.number - num;
		},
		print: function() {
			this.number = (this.number );
		},
	 }
    console.log(example3.number);
		example3.inc();
    example3.inc();
    console.log(example3.number);
		example3.add(5);
		console.log(example3.number);
    example3.subtract();
		console.log(example3.number);
    example3.print();
		console.log(example3.number);




		

		//1. Напишите функцию, которая выводит ваше имя и фамилию.
// functionName("Erjan", "Kydyrov") // My  name is Erjan Kydyrov
function myName(){
	console.log("Medina")
}
myName();


//2. Напишите функцию, которая выводит объем конуса по заданным параметрам - высота (height) и радиус (radius).
// functionName(height, radius) // Объем конуса равен ...

//3. Напишите функцию, которая принимает строку и возвращает ее длину.
// functionName(" ... ") // Длина строки равна ...

//4. Напишите функцию, которая принимает число и проверяет, четное оно или нечетное.
// functionName(num) // Число - четное || Число - нечетное
function number (c) {
	if (number % 2 === 0) {
		console.log("this number is even");
	}
	else if (number % 2 === 1) {
		console.log("this is not even");
	}
	else {
		console.log("this is wrong command");
	}
}

//5. Напишите функцию, которая возвращает квадрат числа.
// functionName(num) // Квадрат этого числа равен

//6. Напишите функцию, которая возвращает корень числа.
// functionName(num) // Корень этого числа равен

//7. Напишите функцию, которая возвращает периметр пятиугольника.
// functionName(a, b, c, d, e) // Периметр - ...

//8. Напишите цикл, который выводит каждое третье число в промежутке от 0 до 33.
// 0 3 6 9 ...

//9. Напишите цикл, вычисляющий факториал числа 8. (8!)
// ...
n = int(input())
 
factorial = 1
 
for i in range(2, n+1)
print(factorial)
//10. Напишите цикл, который выводит квадраты чисел от 1 до 10.
// 1 4 9 ...

//11. Напишите цикл, который вычисляет сумму чисел от 1 до 25.
// ... 

//12. Напишите цикл, который печатает четные числа от 0 до 20.
// 0 2 4

//13. Напишите цикл, который печатает нечетные числа от 1 до 15.
// 1 3 ...

//14. Создайте массив из строк и добавьте в начало массива 2 новых элемента, а в конец 3.

//15. Создайте массив чисел и вычислите сумму всех четных чисел в массиве.

//17. Создайте массив строк и объедините их в одну строку. // ["I", "like", "to", "eat!"]

//18. Создайте массив строк ["one", "two", "three"] и переверните его. // ["three", "two", "one"]

//19. Создайте массив из имен (минимум 3) и выведите каждое имя.
// Hello Erjan Hello Ermek ... 

//20. Создайте массив из чисел и выведите квадраты этих чисел. [2, 3, 4, 5]
// 4 9 16 25

//21. Создайте массив строк и проверьте есть ли такой элемент в массиве. // ["cat", "dog", "snake"] 
// cat - true
// parrot - false