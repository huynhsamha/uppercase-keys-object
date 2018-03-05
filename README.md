# uppercase-keys-object
Uppercase the keys of an object. It is useful for oracledb.


## Installation

`$ npm install --save uppercase-keys-object`

or

`$ yarn add uppercase-keys-object`


## Usage

```js
const upperKeys = require('uppercase-keys-object');

const employee = {
	ID: 127,
	FIRST_Name: 'Huynh',
	last_NAME: 'Ha',
	salary: 1500
};

const res = upperKeys(employee);

console.log(res);

// { ID: 127, FIRST_NAME: 'Huynh', LAST_NAME: 'Ha', SALARY: 1500 }
```

## API

### upperKeys(object)

Returns a new object which keys is/are uppercased.


## Related
[lowercase-keys-object]()
