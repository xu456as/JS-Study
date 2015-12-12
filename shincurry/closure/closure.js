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


// --------------
// 闭包与变量作用域

function f2() {
	var d = 99;
	function f3() {
		console.log("d = " + d);
	}
}
f2();

// --------------
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


// --------------

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



// --------------
// 回调函数
function load() {
	setTimeout(function () {
		loaded("work done.");
		}, 5000);
}

function loaded(str) {
	console.log(str);
}

load();

// 两种方法不同点
// 下一个 setTimeout 参数出错，传入的参数是一个函数的运行结果

function load_new() {
	setTimeout(loaded_new("work done."), 6000);
}

function loaded_new(str) {
	console.log(str + "new");
}

load_new();

// --------------