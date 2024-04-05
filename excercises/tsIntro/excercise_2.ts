interface IPerson {
    name: string,
    age: number,
    email?: string
}

class Person implements IPerson {
    public readonly name: string;
    public readonly age: number;
    public readonly email: string | undefined;

    public constructor(name: string, age: number, email?: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    public sayHello(): void {
        console.log(`Hello ${this.name}`);
    }
}

const person = new Person("yassa", 44);

person.sayHello();