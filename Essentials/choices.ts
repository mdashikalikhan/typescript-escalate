
enum Role{
    ADMIN,
    EDITOR,
    GUEST=''
}

let userRole:Role = 0;

console.log(userRole);

userRole =1;

console.log(userRole);

let admin:'admin';
admin = 'admin';

let availableRole: 'admin' | 'editor' | 'guest' = 'guest';

availableRole = 'admin';

console.log(admin);
console.log(availableRole);

let possibleResults: [-1|1, -1|1]; //[-1, 1]

possibleResults = [1, -1];

type CRole = 'admin' | 'editor' | 'guest' | 'reader';

type User = {
    name:string;
    age:number;
    role:CRole;
    permissions:string[]
};

let myRole:CRole = 'admin';

function access(role:CRole){
    
}