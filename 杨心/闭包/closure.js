// node -v
// v5.0.0




// 全局变量和局部变量

var a = 10; // 全局

function f1() {
	var b = 11; // 局部变量
	c = 12; // ! 全局变量 !
	console.log("b = " + b);
}

f1();

console.log("a = " + a);
console.log("c = " + c);
// 这里 c 应该是全局变量，应该可行的

// 闭包与变量作用域

function f2() {
	var d = 99;
	function f3() {
		console.log("d = " + d);
	}
}
f2();

console.log("--------------");
// 闭包就是能够读取其他函数内部变量的函数

// 基本形式，嵌套

function outer() {
	// code
	function inner() {
		// code
	}
}

//
// demo

var currentPerson = {
	name : "Shin",
	moneyNK : 1,
	addMoney : function(i) {
		this.moneyNK += i;
	}
};

console.log(currentPerson.moneyNK);
currentPerson.addMoney(2);
console.log(currentPerson.moneyNK);
currentPerson.addMoney(3);
console.log(currentPerson.moneyNK);


console.log("--------------");

function count() {
	var counter = 0;

	return function() {
		counter++;
		console.log(counter);
	};

	function test() {
		counter += 10;
		console.log(counter);
	}
}
var ccc = count();
ccc();
ccc();

// ccc.test(); // TypeError: ccc.test is not a function



