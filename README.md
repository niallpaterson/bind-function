# Bind function

Passed a function *f* and zero or more arguments *a1*...*an* returns a function that, when called, returns *f* called with a1*...*an* passed as arguments. Alternative to `Function.prototype.bind`. Does not accept a this value.

## API

### Syntax

````JavaScript
bind(func, [arg1, ... argn]);
````

### Parameters

`func`

Required. The function to be bound.

`args`

Optional. Arguments to be passed to the argument function when called.

### Return

A new function. Bound variant of the argument function.

Example:

```javascript
import bind from 'bind-function';

const sumNums = (a, b) => a + b;

const boundSumNums = bind(sumNums, 1, 2);

boundSumNums(); // returns 3
```

## Purpose

JavaScript has a native solution for function binding, namely `Function.prototype.bind`. Not only is this method syntactically verbose, in that it requires prototype reference and must accept a `this` binding, it does not always work as expected, partcicularly when working with onClick events. Bind function offers an alternative for when you need to call a function with some specified arguments.


## Test

Tested with [AVA](https://www.npmjs.com/package/ava).

````shell
npm test
````

or

````shell
npx ava
````