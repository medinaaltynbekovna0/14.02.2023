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
// functionName("Erjan", "Kydyrov") // My  name is Medina Damirova
   
function nameIs(name) {
	   console.log("my name is " + name);
	 }
   function surnameIs(name) {
	   console.log("my surname is " + name)}
 nameIs("Medina");
 surnameIs("Damirova");

//2. Напишите функцию, которая выводит объем конуса по заданным параметрам - высота (height) и радиус (radius).
// functionName(height, radius) // Объем конуса равен ...

//3. Напишите функцию, которая принимает строку и возвращает ее длину.
// functionName(" ... ") // Длина строки равна ...
//function strLength(text){
//	console,log(text.length)
//}
//strLength("This ia another")
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
//function square(num){
	//return num (2)
//}
//console.log(square(3))
//6. Напишите функцию, которая возвращает корень числа.
// functionName(num) // Корень этого числа равен
//function root(a){
	//return Math.sgrt(a)
//}
//console.log(root(25))
 //functionName(a, b, c, d, e);
 //functiontriangle(a, b, c, d, e){
 //return a + b + c + d +e;}
	//console.log(triangle(5, 3, 6, 9, 5))
 
//7. Напишите функцию, которая возвращает периметр пятиугольника.
// functionName(a, b, c, d, e) // Периметр - ...
//for ( i = o; i < 35;  i +=3 ){
//console.log(i);
//}
//8. Напишите цикл, который выводит каждое третье число в промежутке от 0 до 33.
// 0 3 6 9 ...
 for (let i = 0; i <= 33; i += 5)
 console.log(i);
//9. Напишите цикл, вычисляющий факториал числа 8. (8!)
// ...

//10. Напишите цикл, который выводит квадраты чисел от 1 до 10.
// 1 4 9 ...

//11. Напишите цикл, который вычисляет сумму чисел от 1 до 25.
// ... 
let num = 1;
while (num<=25){
	console.log(num);
	num++;
}
//12. Напишите цикл, который печатает четные числа от 0 до 20.
// 0 2 4
for (let i = 0; i <= 20; i++){
	if (i % 2 == 0){
  console.log(i);
	}
}
//13. Напишите цикл, который печатает нечетные числа от 1 до 15.
// 1 3 ...
for (let i = 1; i < 15; i--){
	if (i % 1 == 15){
		countinue;
		console.log( + i)
	}
}
//14. Создайте массив из строк и добавьте в начало массива 2 новых элемента, а в конец 3.

//15. Создайте массив чисел и вычислите сумму всех четных чисел в массиве.
function sum(a, b){
	console.log(a,b);
}
sum(5, 5)
//17. Создайте массив строк и объедините их в одну строку. // ["I", "like", "to", "eat!"]


//18. Создайте массив строк ["one", "two", "three"] и переверните его. // ["three", "two", "one"]

//19. Создайте массив из имен (минимум 3) и выведите каждое имя.
// Hello Erjan Hello Ermek ... 

//20. Создайте массив из чисел и выведите квадраты этих чисел. [2, 3, 4, 5]
// 4 9 16 25

//21. Создайте массив строк и проверьте есть ли такой элемент в массиве. // ["cat", "dog", "snake"] 
// cat - true
// parrot - false
