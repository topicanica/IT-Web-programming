


var hipotenuza = (x, y) => {
    var kvadrat = (a) => Math.pow(a, 2);
    var korijen = (a) => Math.sqrt(a);
    return korijen(kvadrat(x) + kvadrat(y));
}
var x = 2;
var y = 4;
console.log(hipotenuza(2, 4));

let curryedHello = (msg1) => (msg2) => msg1 + msg2;
let poruka = curryedHello("Kolegij i ects bodovi: ");
console.log(poruka("MUP"));
const niz = Array.from({ length: 20 }, () => Math.floor(10 + Math.random() * 90));
console.log(niz);
const filtrirani = niz.filter((el) => el > 50 && el < 90);
console.log(filtrirani);
const sortirani = filtrirani.sort();
console.log(sortirani);
const updatirani = sortirani.slice(1, -1);
console.log(updatirani);
const suma = updatirani.reduce((el, next) => el + next);
console.log(suma);

