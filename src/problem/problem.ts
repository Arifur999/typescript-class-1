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