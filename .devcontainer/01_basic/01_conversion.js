let score = 33
console.log(typeof score);

let score1 = "33"
console.log(typeof score1);
let con = Number(score1);
console.log(typeof con)
console.log(con)

console.log("====convert non number in number====")
let score11 = "33aa"
console.log(typeof score11);
let con1 = Number(score11);
console.log(typeof con1) // Number
console.log(con1);//NaN

console.log("====convert null in number====")
let score111 = null
console.log(typeof score111);// Object
let con11 = Number(score111);
console.log(typeof con11) // Number
console.log(con11);//0

console.log("====convert undefined in number====")
let score1111 = undefined
console.log(typeof score1111);// undefined
let con111 = Number(score1111);
console.log(typeof con111) // Number
console.log(con111);//NaN

console.log("====convert undefined in number====")
let score11111 = true
console.log(typeof score11111);// boolean
let con1111 = Number(score11111);
console.log(typeof con1111) // Number
console.log(con1111);//1

// "33" => 33
// "33aa" => NaN
// true => 1; false => 0
//1=> true
// ""=> false
//"jitest" => true



// *******************Operations**********************
let value =3
let negValue = -value
console.log(negValue);

let str ="Heloo";
let str2 =" java";
let str3 = str + str2;
console.log(str3)

// if concate start with string it treat other also String
// if not start with string it will be number
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(1 + "2" + 2);

console.log(+true); // 1














