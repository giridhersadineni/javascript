# Math Object Methods


|Method	|Description|
|-|-|
|abs(x)|	Returns the absolute value of x|
|acos(x)	|Returns the arccosine of x, in radians|
|asin(x)	|Returns the arcsine of x, in radians|
|atan(x)|	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians|
|atan2(y, x)	|Returns the arctangent of the quotient of its arguments|
|ceil(x)|	Returns the value of x rounded up to its nearest integer|
|cos(x)|	Returns the cosine of x (x is in radians)|
|exp(x)|	Returns the value of Ex|
|floor(x)|	Returns the value of x rounded down to its nearest integer|
|log(x)|	Returns the natural logarithm (base E) of x|
|max(x, y, z, ..., n)|	Returns the number with the highest value|
|min(x, y, z, ..., n)|	Returns the number with the lowest value|
|pow(x, y)	|Returns the value of x to the power of y|
|random()|	Returns a random number between 0 and 1|
|round(x)|	Returns the value of x rounded to its nearest integer|
|sin(x)|	Returns the sine of x (x is in radians)|
|sqrt(x)	|Returns the square root of x|
|tan(x)|	Returns the tangent of an angle|


# Random Object

The Math.random() function returns a floating-point, pseudo-random number in the range 0–1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

This example returns a random integer
```
function getRandom() {
  return Math.random();
}
```

This example returns a random integer upto max Number
```
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
```

This example returns a random integer between the specified values. The value is no lower than min (or the next integer greater than min if min isn't an integer), and is less than (but not equal to) max.

```
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

```