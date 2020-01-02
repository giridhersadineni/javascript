# Decalaring Variables 
## You can declare a variable in two ways:

* With the keyword `var`. For example, `var x = 42`. This syntax can be used to declare both local and global variables, depending on the execution context.

* With the keyword `const` or `let`. For example, `let y = 13`. This syntax can be used to declare a block-scope local variable. 

# The latest ECMAScript standard defines eight data types:
Seven data types that are primitives:
* Boolean. true and false.
* null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
* undefined. A top-level property whose value is not defined.
* Number. An integer or floating point number. For example: 42 or 3.14159.
* BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
* String. A sequence of characters that represent a text value. For example: "Howdy"
* Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.

# Derived
*Object


# Let
Declares a variable, Assigning a value to it is is optional.

## Example 1
```
let a;
a=10;
console.log(a);
```
## Example 2

```
let a=10;
console.log(a);
```


# Const


# var


# Variable Hoisting

Another unusual thing about variables in JavaScript is that you can refer to a variable declared later, without getting an exception.

This concept is known as hoisting. Variables in JavaScript are, in a sense, "hoisted" (or "lifted") to the top of the function or statement. However, variables that are hoisted return a value of undefined. So even if you declare and initialize after you use or refer to this variable, it still returns undefined.

```
/**
 * Example 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = 'my value';
 
(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
})();

```

