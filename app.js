// Object with two methods
const obj = {
  sayHello: function() {
    return 'hello';
  },
  addNumbers: function(value1, value2) {
    return value1 + value2;
  }
};

// The object is exported to be used in other file
module.exports = obj;
