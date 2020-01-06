

# JavaScript has the following types of operators. 

An Operator is a symbol that denotes an operation to be performed

JavaScript has both binary and unary operators, 
and one special ternary operator, the conditional operator.
A binary operator requires two operands, 
one before the operator and one after the operator:

**a + b**


* Assignment operators
* Comparison operators
* Arithmetic operators
* Bitwise operators
* Logical operators
* String operators
* Conditional (ternary) operator
* Comma operator
* Unary operators
* Relational operators





## Assignment operators
An assignment operator assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand. That is, x = y assigns the value of y to x.


|Operation|Notation|Meaning|
|-|-|-|
|Assignment	|x = y	|x = y|
|Addition assignment	|x += y	|x = x + y|
|Subtraction assignment	|x -= y|	x = x - y|
|Multiplication assignment|	x *= y|	x = x * y|
|Division assignment	|x /= y|	x = x / y|
|Remainder assignment|	x %= y|	x = x % y|
|Exponentiation assignment	|x **= y|	x = x ** y|
|Left shift assignment|	x <<= y	|x = x << y|
|Right shift assignment|	x >>= y|	x = x >> y|
|Unsigned right shift assignment|	x >>>= y|	x = x >>> y|
|Bitwise AND assignment|	x &= y|	x = x & y|
|Bitwise XOR assignment|	x ^= y|	x = x ^ y|
|Bitwise OR assignment|	x |= y|	x = x | y|

## Comparison operators

|Operator|	Description|	Examples returning true|
|-|-|-|
|Equal (==)|	Returns true if the operands are equal.|	3 == var1   "3" == var1   3 == '3'|
|Not equal (!=)|	Returns true if the operands are not equal.	|var1 != 4 var2 != "3"|
|Strict equal (===)|	Returns true if the operands are equal and of the same type. See also Object.is and sameness in JS. |	3 === var1|
| Strict not equal (!==)	| Returns true if the operands are of the same type but not equal, or are of different type. |	var1 !== "3" 3 !== '3'|
|Greater than (>)	|Returns true if the left operand is greater than the right operand.|	var2 > var1 "12" > 2|
|Greater than or equal (>=)	|Returns true if the left operand is greater than or equal to the right operand.|	var2 >= var1 var1 >= 3|
|Less than (<)	|Returns true if the left operand is less than the right operand.	|var1 < var2
"2" < 12|
|Less than or equal (<=)|	Returns true if the left operand is less than or equal to the right operand.|	var1 <= var2
var2 <= 5|

## Arithmetic operators

|Operator	|Description	|Example|
|-|-|-|
|Remainder (%)	Binary operator. |Returns the integer remainder of dividing the two operands.|	12 % 5 returns 2.|
Increment (++)	Unary operator. Adds one to its operand. If used as a prefix operator (++x), returns the value of its operand after adding one; if used as a postfix operator (x++), returns the value of its operand before adding one.	If x is 3, then ++x sets x to 4 and returns 4, whereas x++ returns 3 and, only then, sets x to 4.
Decrement (--)	Unary operator. Subtracts one from its operand. The return value is analogous to that for the increment operator.	If x is 3, then --x sets x to 2 and returns 2, whereas x-- returns 3 and, only then, sets x to 2.
Unary negation (-)	Unary operator. Returns the negation of its operand.	If x is 3, then -x returns -3.
Unary plus (+)	Unary operator. Attempts to convert the operand to a number, if it is not already.	+"3" returns 3.
+true returns 1.
Exponentiation operator (**) 	Calculates the base to the exponent power, that is, baseexponent	2 ** 3 returns 8.
10 ** -1 returns 0.1


## Bitwise operators
A bitwise operator treats their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.

The following table summarizes JavaScript's bitwise operators.

|Operator|	Usage|	Description|
|-|-|-|
|Bitwise AND	|a & b	|Returns a one in each bit position for which the corresponding bits of both operands are ones.|
|Bitwise OR	|a \| b	|Returns a zero in each bit position for which the corresponding bits of both operands are zeros.|
|Bitwise XOR|	a ^ b	|Returns a zero in each bit position for which the corresponding bits are the same.|
[Returns a one in each bit position for which the corresponding bits are different.]
Bitwise NOT	~ a	Inverts the bits of its operand.
Left shift	a << b	Shifts a in binary representation b bits to the left, shifting in zeros from the right.
Sign-propagating right shift	a >> b	Shifts a in binary representation b bits to the right, discarding bits shifted off.
Zero-fill right shift	a >>> b	Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left.



## Logical operators

Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value. However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value. The logical operators are described in the following table.


Logical operators

|Operator	|Usage|	Description|
|-|-|-|
|Logical AND (&&)	| expr1 && expr2 |	Returns expr1 if it can be converted to false; otherwise, returns expr2. Thus, when used with Boolean values, && returns true if both operands are true; otherwise, returns false.|
|Logical OR (\|\|)	| expr1 \|\| expr2	| Returns expr1 if it can be converted to true; otherwise, returns expr2. Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.|
|Logical NOT (!)	|!expr	|Returns false if its single operand that can be converted to true; otherwise, returns true.|

## String operators
In addition to the comparison operators, which can be used on string values, the concatenation operator (+) concatenates two string values together, returning another string that is the union of the two operand strings.

For example,

console.log('my ' + 'string'); // console logs the string "my string".
The shorthand assignment operator += can also be used to concatenate strings.

#### For example
~~~~
=
var mystring = 'alpha';
mystring += 'bet'; // evaluates to "alphabet" and assigns this value to mystring.
~~~~
## Conditional (ternary) ( ? : ) operator


The conditional operator is the only JavaScript operator that takes three operands. The operator can have one of two values based on a condition. The syntax is:

##### condition ? val1 : val2
If condition is true, the operator has the value of val1. Otherwise it has the value of val2. You can use the conditional operator anywhere you would use a standard operator.

For example,
```
var status = (age >= 18) ? 'adult' : 'minor';
This statement assigns the value "adult" to the variable status if age is eighteen or more. Otherwise, 
it assigns the value "minor" to status.
```

## Comma operator

The comma operator (,) simply evaluates both of its operands and returns the value of the last operand. This operator is primarily used inside a for loop, to allow multiple variables to be updated each time through the loop.

For example, if a is a 2-dimensional array with 10 elements on a side, the following code uses the comma operator to update two variables at once. The code prints the values of the diagonal elements in the array:

```
var x = [0,1,2,3,4,5,6,7,8,9]
var a = [x, x, x, x, x];

for (var i = 0, j = 9; i <= j; i++, j--)
  console.log('a[' + i + '][' + j + ']= ' + a[i][j]);
```

## Unary operators

A unary operation is an operation with only one operand.

#### delete
The delete operator deletes an object, an object's property, or an element at a specified index in an array. The syntax is:
```
delete objectName;
delete objectName.property;
delete objectName[index];
delete property; // legal only within a with statement
```

### Deleting array elements
When you delete an array element, the array length is not affected. For example, if you delete a[3], a[4] is still a[4] and a[3] is undefined.

When the delete operator removes an array element, that element is no longer in the array. In the following example, trees[3] is removed with delete. However, trees[3] is still addressable and returns undefined.

When the delete operator removes an array element, that element is no longer in the array. In the following example, trees[3] is removed with delete. However, trees[3] is still addressable and returns undefined.

```
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
delete trees[3];
if (3 in trees) {
  // this does not get executed
}
```

If you want an array element to exist but have an undefined value, use the undefined keyword instead of the delete operator. In the following example, trees[3] is assigned the value undefined, but the array element still exists:

```
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees[3] = undefined;
if (3 in trees) {
  // this gets executed
}

```

### typeof
The typeof operator is used in either of the following ways:

```
typeof operand
typeof (operand)
```
The typeof operator returns a string indicating the type of the unevaluated operand. operand is the string, variable, keyword, or object for which the type is to be returned. The parentheses are optional.

Suppose you define the following variables:
```
var myFun = new Function('5 + 2');
var shape = 'round';
var size = 1;
var foo = ['Apple', 'Mango', 'Orange'];
var today = new Date();
The typeof operator returns the following results for these variables:
```
```
typeof myFun;       // returns "function"
typeof shape;       // returns "string"
typeof size;        // returns "number"
typeof foo;         // returns "object"
typeof today;       // returns "object"
typeof doesntExist; // returns "undefined"
For the keywords true and null, the typeof operator returns the following results:
```
```
typeof true; // returns "boolean"
typeof null; // returns "object"
For a number or string, the typeof operator returns the following results:


typeof 62;            // returns "number"
typeof 'Hello world'; // returns "string"

For property values, the typeof operator returns the type of value the property contains:
```

```
typeof document.lastModified; // returns "string"
typeof window.length;         // returns "number"
typeof Math.LN2;              // returns "number"
For methods and functions, the typeof operator returns results as follows:

typeof blur;        // returns "function"
typeof eval;        // returns "function"
typeof parseInt;    // returns "function"
typeof shape.split; // returns "function"
For predefined objects, the typeof operator returns results as follows:

typeof Date;     // returns "function"
typeof Function; // returns "function"
typeof Math;     // returns "object"
typeof Option;   // returns "function"
typeof String;   // returns "function"

```
### void
The void operator is used in either of the following ways:

void (expression)
void expression
The void operator specifies an expression to be evaluated without returning a value. expression is a JavaScript expression to evaluate. The parentheses surrounding the expression are optional, but it is good style to use them.

You can use the void operator to specify an expression as a hypertext link. The expression is evaluated but is not loaded in place of the current document.

The following code creates a hypertext link that does nothing when the user clicks it. When the user clicks the link, void(0) evaluates to undefined, which has no effect in JavaScript.

<a href="javascript:void(0)">Click here to do nothing</a>
The following code creates a hypertext link that submits a form when the user clicks it.

<a href="javascript:void(document.form.submit())">
Click here to submit</a>


## Relational operators

A relational operator compares its operands and returns a Boolean value based on whether the comparison is true.

## in

The in operator returns true if the specified property is in the specified object. The syntax is:

propNameOrNumber in objectName
where propNameOrNumber is a string, numeric, or symbol expression representing a property name or array index, and objectName is the name of an object.

The following examples show some uses of the in operator.
```
// Arrays
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
0 in trees;        // returns true
3 in trees;        // returns true
6 in trees;        // returns false
'bay' in trees;    // returns false (you must specify the index number,
                   // not the value at that index)
'length' in trees; // returns true (length is an Array property)

// built-in objects
'PI' in Math;          // returns true
var myString = new String('coral');
'length' in myString;  // returns true

// Custom objects
var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
'make' in mycar;  // returns true
'model' in mycar; // returns true

```

### instanceof


The instanceof operator returns true if the specified object is of the specified object type. The syntax is:

##### objectName instanceof objectType
where objectName is the name of the object to compare to objectType, and objectType is an object type, such as Date or Array.

Use instanceof when you need to confirm the type of an object at runtime. For example, when catching exceptions, you can branch to different exception-handling code depending on the type of exception thrown.

For example, the following code uses instanceof to determine whether theDay is a Date object. Because theDay is a Date object, the statements in the if statement execute.
```
var theDay = new Date(1995, 12, 17);
if (theDay instanceof Date) {
  // statements to execute
}
```


# Operator Precedence
The precedence of operators determines the order they are applied when evaluating an expression. You can override operator precedence by using parentheses.

The following table describes the precedence of operators, from highest to lowest.

|Operator type	|Individual operators|
|-|-|
|member	|. []|
|call / create instance	|() new|
|negation/increment|	! ~ - + ++ -- typeof void delete|
|multiply/divide|* / %|
|addition/subtraction|	+ -|
|bitwise shift	|<< >> >>>|
|relational	|< <= > >= in instanceof|
|equality	|== != === !==|
|bitwise-and|	&|
|bitwise-xor	|^|
|bitwise-or|	\||
|logical-and|	&&|
|logical-or	|\||
|conditional|	?:|
|assignment|	= += -= *= /= %= <<= >>= >>>= &= ^= |=
|comma	|,|