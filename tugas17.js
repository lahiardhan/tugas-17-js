function lowerUpper(x) {
	console.log(x.toLowerCase());
	console.log(x.toUpperCase());
}
function asciiCode(x) {
   a = x.charCodeAt(0);
   b = x.charCodeAt(1);
   c = x.charCodeAt(2);
   d = x.charCodeAt(3);
   e = x.charCodeAt(4);
   f = x.charCodeAt(5);
   console.log(a+'-'+b+'-'+c+'-'+d+'-'+e+'-'+f);
}
let kata1 = "Saya beLajar bahaSa peMrograman deNgan khUsuk.";
let kata2 =
	"Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.";

let kata3 =
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

lowerUpper(kata1);
lowerUpper(kata2);

console.log("");

asciiCode(kata3);