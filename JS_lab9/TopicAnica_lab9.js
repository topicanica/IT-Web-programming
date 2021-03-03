let str="cascading style sheets";

let rijeci=str.split(' ');

for (let i=0; i<rijeci.length; ++i){
	rijeci[i]= rijeci[i].slice(0,1).toUpperCase();
	
}
rijeci= rijeci.join('');
console.log(rijeci);

str= str+ " (" + rijeci +")"
console.log(str);

let sum=0;
for (let i=0; i<str.length; ++i){
if(str[i]=='s' || str[i]=='S' )
	sum++;
}
console.log(sum);

let provjera_hex= /^#[a-f0-9]{6}|^#[a-f0-9]{3}$/gi;
let hex="#aae31c"
console.log(provjera_hex.test(hex));

let provjera_maila=/^[a-z_]+@([a-z]+\.)+[a-z]{2,3}$/g;
let mail= "anica_topic@mail.com";
console.log(provjera_maila.test(mail));