"use strict";

//1

const car = {
  type: "electric",
  wheels: 4,
};

const sportcar = {
  doors: 2,
};

// 1.1
Object.setPrototypeOf(sportcar, car);

// 1.2
const passengerCar = {
  doors: 4,
};

Object.setPrototypeOf(passengerCar, car);

// 1.3
const toyCar = {
  type: "toy",
};

Object.setPrototypeOf(toyCar, sportcar);

console.log(sportcar.type);
console.log(passengerCar);
console.log(passengerCar.type);
console.log(toyCar.wheels, toyCar.doors);
console.log(toyCar);


// 2

const employees = {
  wallet: {},
  pay(month, sum) {
    this.wallet[month] = sum;
  },
};

const frontendDeveloper = {
  name: "Mike",
  wallet: {},
  pay(month, sum) {
    this.wallet[month] = sum;
  },
};

Object.setPrototypeOf(frontendDeveloper, employees);

const backendDeveloper = {
  name: "Bob",
  wallet: {},
  pay(month, sum) {
    this.wallet[month] = sum;
  },
};

Object.setPrototypeOf(backendDeveloper, employees);

backendDeveloper.pay("june", 1500);
frontendDeveloper.pay("june", 2000);

console.log(backendDeveloper.wallet.june);
console.log(frontendDeveloper.wallet.june);


//3

function User(name, age) {
  this.name = name;
  this.age = age;
}

const user_1 = new User("Mike", 18);

const user_2 = Object.create(user_1);
user_2.name = "Bob";
user_2.age = 25;

console.log(user_1);
console.log(user_2);


//4

function UserType(name) {
  for (let i = 0; i < name.length; i++) {
    this[i] = name[i];
    if (i + 1 === name.length) {
      Object.defineProperty(this, "length", {
        enumerable: true,
        writable: false,
        configurable: true,
        value: i + 1,
      });
    }
  }
   this.join = Array.prototype.join;
}

let admins = new UserType(["Mike", "Bob", "Nicola"]);
let admins1 = new UserType(["Tom", "Jon"]);


console.log(admins);

console.log(admins.join("; "));
console.log(admins1.join("; "));
