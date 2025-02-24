var isDone = false;
isDone = true;
// let isDone=true  show error 
//number
var price = 10;
//string
var f_name = "masai";
var l_name = "school";
var full_name = "".concat(f_name, "_").concat(l_name);
console.log("1", full_name);
//Array
var arr = [1, 2, 2, 3];
arr.push(10);
var arrofstring = ["masai", "school"];
arrofstring.push("banglore");
// ? means is optional
var arrofperson = [
    {
        f_name: "masai",
        l_name: "school",
        age: 3
    }, {
        f_name: "masai",
        l_name: "school"
    }, {
        f_name: "masai",
        l_name: "school",
        age: 3
    }
];
var masai = {
    f_name: "masai",
    l_name: "school",
    age: 3
};
//tuple
//type of element are known in advanced and order is important
// no of element in the tuple is fixed, so
var tuple = ["masai", 3, true];
//or write 
// tuple=["masai",3,true]
tuple.push(5);
console.log(tuple);
//Enums- a group named constains
var ACTION_TYPES;
(function (ACTION_TYPES) {
    ACTION_TYPES[ACTION_TYPES["loginRequired"] = 0] = "loginRequired";
    ACTION_TYPES[ACTION_TYPES["loginSuccess"] = 1] = "loginSuccess";
})(ACTION_TYPES || (ACTION_TYPES = {}));
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["blue"] = 2] = "blue";
    Color["RED1"] = "Red";
    Color["GREEN1"] = "Green";
})(Color || (Color = {}));
console.log(Color["1"]);
var colors = Color.GREEN;
console.log(colors);
//others
var u;
var n;
var a;
//functions
// function sum(a:number,b:number):number {
//     return a+b
// }
var sum = function (a, b) {
    return a + b;
};
console.log(sum(2, 2));
// const printName = ({ first_name, last_name, age, isWorking }: personName): void => {
//     console.log(`${first_name}_${last_name}`);
// };
// let person1: person = {
//   first_name: "Masai",
//   last_name: "School",
//   age: 3,
//   isWorking: true,
// };
// printName(person1);
//unions it could be 
var output;
output = ["masai", 3];
//  let coder:person & software={
// // /// nothing used that why error
// first_name: "masai",
//   last_name: "school",
//   isWorking: true,
//   skills: "coding",
//  }
//problem-1
var p_name = "Rahul";
var age = 23;
var isFetching = false;
var array = [5, 6, 7];
var sarr = ["ram", "shyam", "sita"];
var tuple1 = ["masai", true];
var USER;
(function (USER) {
    USER[USER["SuperUser"] = 0] = "SuperUser";
    USER[USER["Admin"] = 1] = "Admin";
    USER[USER["SuperAdmin"] = 2] = "SuperAdmin";
    USER[USER["User"] = 3] = "User";
})(USER || (USER = {}));
function product(x, y) {
    return x * y;
}
console.log(product(5, 6));
function divide(x, y) {
    return x / y;
}
console.log(divide(8, 4));
var print1 = function (a) {
    console.log(a);
};
print1("ravi");
function getName(f_name, l_name) {
    if (!l_name) {
        return "".concat(f_name);
    }
    else {
        return "".concat(f_name, "_").concat(l_name);
    }
}
console.log(getName("radha"));
