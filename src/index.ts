class Human {
    public age: number;
    public name: string;
    public gender: string;
    constructor(name: string, age:number, gender:string){
        this.age=age;
        this.name=name;
        this.gender=gender;
    }
}

const annonymouse=new Human("Unchaptered",18,"male");

const sayHello=(person: Human):string=>{
    return `Hello ${person.name}, you are ${person.age} and you are a ${person.gender}`;
}

console.log(sayHello(annonymouse));

export {};