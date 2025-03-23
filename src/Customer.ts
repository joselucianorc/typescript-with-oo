//Customer.ts

import Person from "./Person";
import Address from "./Address";


export default class Customer extends Person {

    address: Address;

    //constructor
    constructor(name: string, email: string, birthDate: Date, address: Address) {
        super(name, email, birthDate);
        this.address = address;
    }





}
