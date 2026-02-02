
function add(a:number, b:number):number{
    return a + b;
}

function log(message:any):void{
    console.log(message);
}

function logAndThrow(errorMessage:string):never{
    console.log(errorMessage);
    throw new Error(errorMessage);
}

const logMsg = (msg:string)=>{
    console.log(msg);
};

function performJob(cb:(message:string)=>void){
    //...
    cb('Job Done!!');
}

performJob(logMsg);

performJob(log);

type AUser = {
    name :string;
    age:number;
    greet:()=>string;
};

let auser:AUser={
    name:'ASHIK',
    age:80,
    greet() {
        console.log(this.name);
        return this.name;
    }
};

auser.greet();

