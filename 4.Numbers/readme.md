# Numbers 

The Number JavaScript object is a wrapper object allowing you to work with numerical values. A Number object is created using the Number() constructor. A primitive type object number is created using the Number() function.

The JavaScript Number type is double-precision 64-bit binary format **IEEE 754 value**. In more recent implementations, JavaScript also supports integers with arbitrary precision using the BigInt type.

```
a=10 

```

## Defining number object

```
new Number(value); 
var a = new Number('123'); // a === 123 is false
var b = Number('123'); // b === 123 is true

a instanceof Number; // is true
b instanceof Number; // is false

```



var a = new Number(10)
Number {10}

To String Method Converts a number to a string

```
a.toString()
"10"
```

### Another way of Converting a number to string
```
""+a
"10.525"

```

### To Get Precision Value 

a.toPrecision()
"10"

### To Convert a Number to Exponential Value

a.toExponential()
"1.0525e+1"


### To get Value of Number 


a.valueOf()
10.525





a=10.25
10.25

a.isNaN()
Number.isNaN(b)
false

"g"/0
NaN

Number.isNaN("g"/0)
true

a=Infinity
Infinity
Number.isFinite(a)

a=23423.435345
Number.isInteger(a)
false

a=232
232
Number.isInteger(a)
true


## ParseInt ParseFloat Demo

```
a=21321.524654
parseInt(a)
21321

parseFloat(a)
21321.524654

s="10.233434gjksdf"
"10.233434gjksdf"
parseInt(s)
10
parseFloat(s)
10.233434

```

Examples 
Using the Number object to assign values to numeric variablesSection
The following example uses the Number object's properties to assign values to several numeric variables:

```
var biggestNum = Number.MAX_VALUE;
var smallestNum = Number.MIN_VALUE;
var infiniteNum = Number.POSITIVE_INFINITY;
var negInfiniteNum = Number.NEGATIVE_INFINITY;
var notANum = Number.NaN;

```

Integer range for NumberSection

The following example shows the minimum and maximum integer values that can be represented as Number object (for details, refer to ECMAScript standard, chapter 6.1.6 The Number Type):

var biggestInt = Number.MAX_SAFE_INTEGER; //(253 - 1) => 9007199254740991;
var smallestInt = Number.MIN_SAFE_INTEGER;  //-(253 - 1) => -9007199254740991;
When parsing data that has been serialized to JSON, integer values falling out of this range can be expected to become corrupted when JSON parser coerces them to Number type. Using String instead is a possible workaround.

### Number Properties

* Number.MAX_SAFE_INTEGER
9007199254740991

* Number.MAX_VALUE
1.7976931348623157e+308

* Number.EPSILON
2.220446049250313e-16

* Number.MIN_VALUE
5e-324

* Number.NEGATIVE_INFINITY
-Infinity

* Number.POSITIVE_INFINITY
Infinity




Number.MAX_SAFE_INTEGER
9007199254740991

Number.MAX_VALUE
1.7976931348623157e+308

Number.EPSILON
2.220446049250313e-16

Number.MIN_VALUE
5e-324

Number.NEGATIVE_INFINITY
-Infinity

Number.POSITIVE_INFINITY
Infinity


Larger numbers can be represented using the BigInt type.

Using Number to convert a Date objectSection
The following example converts the Date object to a numerical value using Number as a function:

var d = new Date('December 17, 1995 03:24:00');
console.log(Number(d));
This logs "819199440000".
```
Convert numeric strings and null to numbersSection
Number('123')     // 123
Number('12.3')    // 12.3
Number('12.00')   // 12
Number('123e-1')  // 12.3
Number('')        // 0
Number(null)      // 0
Number('0x11')    // 17
Number('0b11')    // 3
Number('0o11')    // 9
Number('foo')     // NaN
Number('100a')    // NaN
Number('-Infinity') //-Infinity
```