// Require chai which is an assertion library
const chai = require('chai');

// Using destructuring to pull out the assert property
// You can also use const assert = require('chai').assert;
const { assert } = chai;

// Import the object created in the app.js file
const app = require('../app');

// Create sayHelloResult variable
const sayHelloResult = app.sayHello();

// Create addNumbersResult variable
const addNumbersResult = app.addNumbers(5, 5);

// Describing the entire app
describe('App', function() {
  // This stores tests for sayHello()
  describe('sayHello', function() {
    // Testcase for sayHello value
    it('sayHello should return hello', function() {
      assert.equal(sayHelloResult, 'hello');
    });

    // Testcase for sayHello data type
    it('sayHello should return type string', function() {
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  // This stores tests for the addNumbers() method
  describe('addNumbers', function() {
    //Testcase for addNumbers value
    it('Numbers should be above 5', function() {
      assert.isAbove(addNumbersResult, 5);
    });

    // Testcase for addNumbers datatype
    it('addNumbers should return type number', function() {
      assert.typeOf(addNumbersResult, 'number');
    });
  });
});
