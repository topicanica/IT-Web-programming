let sum=0;
for (let i=50; i>=10;i--)
{
	(i%2==0 && i%5 ==0)? console.log(i): (sum+=i);
}
console.log(sum);

let sum1=0, i=50;
while(i>=10)
{
	if(i%2==0 & i%5==0){
		sum+=i;
	}
	else{
		console.log(i);
	}
	i--;
}
let studij="RIF"
switch(studij){
	case "IT":
		console.log("Informacijska tehnologija");
		break;
	case "RIF":
		console.log("Racunovodstvo i financije");
		break;
	case "KS":
		console.log("Konstrukcijsko strojarstvo");
		break;
	case "TP":
		console.log("Trgovinsko poslovanje");
		break;
	default:
		break;
}
var Opseg=function(a,b,c)
{
	return a+b+c;
};
let a=2,b=3,c=4;
console.log(Opseg(a,b,c));