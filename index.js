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




		function myName(){
			console.log("Medina")
		}
		myName();

		functionName ("")