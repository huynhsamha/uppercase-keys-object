# uppercase-keys-object

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

Uppercase the keys of an object. Use for node and browser

It is useful for [oracledb](https://github.com/oracle/node-oracledb).

## Installation

`$ npm install --save uppercase-keys-object`

or

`$ yarn add uppercase-keys-object`


## Usage

#### Node.JS

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

console.log(upperKeys(null)); // null
console.log(upperKeys(undefined)); // null
```

#### Browser
##### 1. NPM Package
```html
<script src="./node_modules/uppercase-keys-object/dist/uppercase-keys-object.js"></script>
<!-- Or use minified -->
<script src="./node_modules/uppercase-keys-object/dist/uppercase-keys-object.min.js"></script>
```
##### 2. Download from source
```html
<script src="path/to/uppercase-keys-object"></script>
```
##### Usage
```html
<script>
	const employee = {
		ID: 127,
		FIRST_Name: 'Huynh',
		last_NAME: 'Ha',
		salary: 1500
	};

	const res = upperKeys(employee);

	console.log(res);
	console.log(upperKeys(null)); // null
	console.log(upperKeys(undefined)); // null
</script>
```

## API

### upperKeys(object)

Returns a new object which keys is/are uppercased.


## Related
+ [lowercase-keys-object](https://github.com/huynhsamha/lowercase-keys-object)
+ [camelcase-keys-object](https://github.com/huynhsamha/camelcase-keys-object)


[npm-image]: https://img.shields.io/npm/v/uppercase-keys-object.svg?style=flat
[npm-url]: https://www.npmjs.com/package/uppercase-keys-object
[downloads-image]: https://img.shields.io/npm/dm/uppercase-keys-object.svg?style=flat
[downloads-url]: https://www.npmjs.com/package/uppercase-keys-object
