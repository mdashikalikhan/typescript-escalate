let hobbies = ['Sports', 'Cooking'];

hobbies.push('12');

let users:(string|number)[];

users=[1,'1'];

users.push(2);

users.push('2');

console.log(users);

console.log(hobbies);

let names:Array<string|number>;

names=['1', 'one'];

console.log(names);

//Fixed length array - tuples

let possibleResults: [number, number];

possibleResults = [1, -1];

console.log(possibleResults);

let user : {
    name: string;
    age: number | string;
    hobbies: string[];
    role:{
        description: string;
        id: number;
    }
} = {
    name: "ASHIK",
    age: '44',
    hobbies: ['Sports', 'Cooking'],
    role:{
        description: 'admin',
        id: 1
    }
};

console.log(user);

let val:{}='is a value';

console.log(val);

let data:Record<string, number|string>;

data= {
     entry1 : 1,
     entry2 :'one'
};

console.log(data);

let sampleData:Record<number,number>;

sampleData = {
    1 : 1,
    2 : 2
};



console.log(sampleData);