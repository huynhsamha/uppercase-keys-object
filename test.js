const upperKeys = require('./index');

const employee = {
	ID: 127,
	FIRST_Name: 'Huynh',
	last_NAME: 'Ha',
	salary: 1500
};

const res = upperKeys(employee);

console.log(res);
