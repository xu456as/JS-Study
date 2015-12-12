console.log('------------');
var a = function(){
var c = 1; 
return {
d:function(){c++}, 
o:function(){console.log(c)}
}
}

var pp = a();

pp.d();
pp.o();
console.log('hello world');

ww();

function ww(){
 console.log('---');
};
