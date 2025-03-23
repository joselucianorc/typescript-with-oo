
export default class Person {
        //attributes
        name: string;
        age: number;
        email: string;
        birthDate: Date;

        constructor(name: string, email: string, birthDate: Date) {
            this.name = name;
            this.email = email;
            this.birthDate = birthDate;
            this.age = new Date().getFullYear() - birthDate.getFullYear();
        }

        //methods here
        isAdult() {
            return this.age >= 18;
        }

        getFirstName() {
            return this.name.split(" ")[0];
        }
}