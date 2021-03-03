function sumaiprodukt (a,b){
	if(isFinite(a)&& isFinite(b)){return [a+b,a*b];}
}
var [suma,produkt] = sumaiprodukt(5,4);
console.log(suma,produkt);
console.log(sumaiprodukt(5,4));

function zbroji(a,b) {console.log(a+b);}
function oduzmi (a,b) {console.log(a-b);}
function pomnozi(a,b) {console.log(a*b);}
function podijeli(a,b) {console.log(a/b);}

function pozovi(a,b,fun){
	return fun(a,b);
}

let a=parseInt(prompt("unesite prvi broj:"));
let b=parseInt(prompt("unesite drugi broj:"));
let op=prompt("unesite zeljeni operator: (+,-,* ili /)")

if (op="+"){
	pozovi(a,b,zbroji);
}
else if (op="-"){
	pozovi(a,b,oduzmi);
}
else if (op="*"){
	pozovi(a,b,pomnozi);
}
else if (op="/"){
	pozovi(a,b,podijeli);
}
else{ 
	console.log("operator mora bit +, -,/ ili *")
}

function kreirajpor(por){
	return function (ime){
		return por + " " + ime;
	};
}

let por= prompt("unesite poruku: ");
let ime= prompt("unesite ime: ");

console.log(kreirajpor(por)(ime));