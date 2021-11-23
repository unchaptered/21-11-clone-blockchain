interface Human{
    name:string,
    age:number,
    gender:string
}
const person={
    name: "unchaptered",
    age:22,
    gender: "male"
}
const sayHello=(person: Human):string=>{
    // console.log(`Hello ${name}, you are ${age} and you are a ${gender}`);
    return `Hello ${person.name}, you are ${person.age} and you are a ${person.gender}`;
}


console.log(sayHello(person));

export {};