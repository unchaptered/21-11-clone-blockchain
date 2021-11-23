// const name="Unchaptered", age=24, gender="male";

const sayHello=(name:string,age:number,gender?:string):string=>{
    // console.log(`Hello ${name}, you are ${age} and you are a ${gender}`);
    return `Hello ${name}, you are ${age} and you are a ${gender}`;
}

// sayHello(name,age,gender);
// sayHello(name,age);
console.log(sayHello("Unchaptered", 444, "male"));

// ? 연산자를 붙이지 않으면 sayHello(name,age) 는 에러를 발생시킨다.

export {};