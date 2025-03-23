
import Customer from "./Customer";
import Address from "./Address";

const address = new Address("Albatroz 58", "Adelina Mara", "Porto Feliz", "SP"); 
const customer1 = new Customer("Jose", "joseemail@gmail.com", new Date(1985, 5, 27), address);
const customer2 = new Customer("Maria", "mariaemail@gmail.com", new Date(1989, 7, 22), address);

console.log(customer1.isAdult());
console.log(customer2.isAdult());

console.log(customer1.address.toString());