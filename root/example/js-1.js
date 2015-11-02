
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

delete pp.d
delete pp.o

pp.d();
