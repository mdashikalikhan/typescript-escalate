let userName:string;

userName='Ashik';

console.log(userName);

function add(a:any,b:any){
    return a+b;
}

let x: number = 10;
let y: string = "20";
console.log(x + y);

type User ={
    name: string;
    age: number;
    role?:'admin'| 'guest';
}

let input = null;

const didProvideInput1 = input || false;

console.log(didProvideInput1);

input = '';

const didProvideInput2 = input || false;

console.log(didProvideInput2);

const didProvideInput3 = input ?? false;

console.log(didProvideInput3);
