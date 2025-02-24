let isDone:boolean =false
isDone=true
// let isDone=true  show error 
//number
let price:number=10;

//string
let f_name:string="masai"
let l_name:string="school"

let full_name=`${f_name}_${l_name}`
console.log("1",full_name)

//Array
let arr:number[]=[1,2,2,3]
arr.push(10)
let arrofstring:string[]=["masai","school"]
arrofstring.push("banglore")

//Object
//Primitive types in TypeScript -> number, string, boolean, null, undefined, symbol and big-int.
// to create object shape


// type person={f_name:string;l_name:string;age:number}

interface person{f_name:string;l_name:string;age?:number}
// ? means is optional
let arrofperson:person[]=[
    {
        f_name:"masai",
        l_name:"school",
        age:3
    },{
        f_name:"masai",
        l_name:"school"
    },{
        f_name:"masai",
        l_name:"school",
        age:3
    }
]
const masai:person={
    f_name:"masai",
    l_name:"school",
    age:3
}

//tuple
//type of element are known in advanced and order is important
// no of element in the tuple is fixed, so

let tuple:[string,number,boolean]=["masai",3,true]
//or write 
// tuple=["masai",3,true]
tuple.push(5);
console.log(tuple);


//Enums- a group named constains
enum ACTION_TYPES{
    loginRequired,loginSuccess
}
enum Color{
    RED,//0
    GREEN,///1
    blue,//2

    RED1="Red",
    GREEN1="Green",
}
console.log(Color["1"])
let colors=Color.GREEN
console.log(colors)



//others

let u:undefined
let n:null
let a:any

//functions

// function sum(a:number,b:number):number {
//     return a+b
// }
const sum=(a:number,b:number):number=>{
return a+b
}
console.log(sum(2,2))


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

let output:(number | string)[]

output=["masai",3]

//intersections
// type12=type1 & type2 
type software={
    skill: string
}
//  let coder:person & software={
// // /// nothing used that why error
// first_name: "masai",
//   last_name: "school",
//   isWorking: true,
//   skills: "coding",
//  }

//problem-1

let p_name:string ="Rahul"
let age:number=23
let isFetching:boolean = false

let array:number[]=[5,6,7]
let sarr:string[]=["ram","shyam","sita"]

let tuple1:[string,boolean]=["masai",true]

enum USER{
    SuperUser,Admin,SuperAdmin,User
}

function product(x:number,y:number):number {
    return x*y
}
console.log(product(5,6))


function divide(x:number,y:number):number {
    return x/y
}
console.log(divide(8,4))


const print1=(a:string)=>{
    console.log(a)
}
print1("ravi")

//Problem-2


interface personNew{title:string;status:boolean;id:number}

function getName(f_name:string,l_name?:string){
    if(!l_name){
        return `${f_name}`
    }
    else{
return `${f_name}_${l_name}`
    }
}
console.log(getName("radha"))


interface address{houseNumber:number;street:string;city:string;state:string;postalCode:number;country:string;}



interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

// fucntion userType(obj:User|Admin):string{
//     return obj.type
// }