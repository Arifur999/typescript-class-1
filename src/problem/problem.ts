// Problem 1: Number বা String—দুটোই নেয়, কিন্তু Number হলে যোগ করবে, String হলে concatenate করবে
// Problem

// একটা function লিখবে যা দুইটা ভ্যালু নেবে (number | string)।
// যদি দুটোই number হয় → যোগ করবে
// যদি দুটোই string হয় → concatenate করবে
// না হলে error message return করবে।


function combine(a: number | string, b: number | string): string | number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    return "Error: Types must match!";
  }
}

console.log(combine(5, 10));        // 15
console.log(combine("Hi ", "There"));  // Hi There
console.log(combine(5, "Hello"));     // Error



// Problem 2: Array থেকে শুধু ইউনিক ভ্যালু বের করে আনা
// Problem

// একটা function লিখবে যেটা number/string এর array নেবে এবং ডুপ্লিকেট ছাড়া ইউনিক লিস্ট return করবে।

function getUnique(values: (string | number)[]): (string | number)[] {
  return [...new Set(values)];
}

console.log(getUnique([1, 2, 2, 3, 4, 4]));     // [1, 2, 3, 4]
console.log(getUnique(["a", "b", "a"]));       // ["a", "b"]

// Problem 3: Interface ব্যবহার করে Person এর details দেখানো
// Problem

// Person নামে একটি interface বানাবে যেটায় name, age, email থাকবে।
// একটা function লিখবে যেটা Person type এর object নিয়ে details return করবে।

interface Person {
  name: string;
  age: number;
  email: string;
}

function showPerson(p: Person): string {
  return `Name: ${p.name}, Age: ${p.age}, Email: ${p.email}`;
}

console.log(showPerson({ name: "Arif", age: 22, email: "arif@mail.com" }));



// Problem 4: Optional Parameter ব্যবহার
// Problem

// একটা function লিখো যা name নেবে এবং age optional থাকবে। Age দিলে age দেখাবে, না দিলে শুধু name return করবে।

function showInfo(name: string, age?: number): string {
  if (age) {
    return `${name} is ${age} years old`;
  }
  return `Name: ${name}`;
}

console.log(showInfo("Arif", 25)); 
console.log(showInfo("Arif"));


// Problem 5: Tuple ব্যবহার করে coordinates return করা
// Problem

// একটি function বানাবে যা দুইটা number ইনপুট নেবে এবং [x, y] টুপল return করবে।


function getCoordinates(x: number, y: number): [number, number] {
  return [x, y];
}

console.log(getCoordinates(10, 20));

// Problem 6: Union Type দিয়ে Status handle করা
// Problem

// Status type = "success" | "error" | "loading"
// একটা function লিখো যা status অনুযায়ী message return করবে।


type Status = "success" | "error" | "loading";

function getStatusMessage(status: Status): string {
  switch (status) {
    case "success":
      return "Operation successful!";
    case "error":
      return "Something went wrong!";
    case "loading":
      return "Loading...";
  }
}

console.log(getStatusMessage("success"));
console.log(getStatusMessage("loading"));



// Problem 7: Class তৈরি করে Method ব্যবহার
// Problem

// Car নামে একটা class বানাবে যার brand এবং model থাকবে।
// একটা method থাকবে getFullName() → “Toyota Corolla”

class Car {
  constructor(public brand: string, public model: string) {}

  getFullName(): string {
    return `${this.brand} ${this.model}`;
  }
}

const myCar = new Car("Toyota", "Corolla");
console.log(myCar.getFullName());



// Problem 8: Array of Objects filter করা (Type সহ)
// Problem

// Products array থাকবে, প্রতিটায় name ও price থাকবে।
// একটা function লিখবে যেটা price > 100 এমন product গুলো return করবে।

interface Product {
  name: string;
  price: number;
}

function filterExpensive(products: Product[]): Product[] {
  return products.filter(p => p.price > 100);
}

const items: Product[] = [
  { name: "Pen", price: 20 },
  { name: "Bag", price: 150 },
  { name: "Shoes", price: 300 },
];

console.log(filterExpensive(items));



// Problem 9: Function এ Generic ব্যবহার
// Problem

// একটা generic function লিখবে যা যেকোনো টাইপের value কে array হিসেবে return করবে।

function toArray<T>(value: T): T[] {
  return [value];
}

console.log(toArray(10));        // [10]
console.log(toArray("Hello"));   // ["Hello"]
console.log(toArray(true));      // [true]



// Problem 10: Readonly Property ব্যবহার
// Problem

// একটি interface বানাবে যেখানে id readonly থাকবে। পরে id পরিবর্তন করলে error দেখবে।


interface User {
  readonly id: number;
  name: string;
}

const u: User = { id: 1, name: "Arif" };

// u.id = 5; // ❌ Error: Cannot assign to 'id'

u.name = "Rakib"; // ✔ OK
console.log(u);
