console.log("Hello, Mr. Rube.");

// --------------------------
// 基本变量类型

var yxObject = {};
var yxString = "Shin";
var yxInt = 10;
var yxArray = [1,2];
var yxFunc = function () {
	console.log("Do something.");
}
console.log(typeof yxObject);
console.log(typeof yxString);
console.log(typeof yxInt);
console.log(typeof yxArray); // array is a object
console.log(typeof yxFunc);

// --------------------------
// !!!!
function test() {
	var x = y = 10;
}

// console.log(y); // ReferenceError: y is not defined

// --------------------------
// 可以不用写形参

function noArgsFunc() {
	console.log(arguments);
	// 不管 arguments 接收的实参是一个还是多个，都会的到一个对象
}

noArgsFunc(1, 2, 3, 4, 5, 6);
// { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }

// --------------------------
// 直接运行的匿名函数


(function (xxx) {
	console.log("print right now, arg = " + xxx);
})(1024);

// --------------------------
// 函数声明调用和函数变量的声明
xxx();
// yyy(); // TypeError: yyy is not a function

function xxx() {
	console.log("xxx");
}

var yyy = function () {
	console.log("yyy");
}


// --------------------------
// 声明数组和对象的推荐方法

var yxArr = []; 
// instead of :
// var yxArr = new Array();
var yxObj = {}; 
// instead of :
// var yxObj = new Object();

// --------------------------


