
// an assertion library
const expect = require('expect');

const utils = require('./utils');




it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');

  // if (res !== 44) {
  //   throw new Error(`Expected 44 but got ${res}.`);
  // }
  
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    })
});

it('should square a number', () => {
  
  var res = utils.square(4);

  expect(res).toBe(16).toBeA('number');

  // if (res !== 16) {
  //   throw new Error(`Expected 16 but got ${res}.`);
  // }

});

it('should async square a number', (done) => {
  utils.asyncSquare(5, (res) => {
    expect(res).toBe(25).toBeA('number');
    done();
  })
});


it('should expect some values', () => {

  // expect(12).toNotBe(11);
  // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
  // expect([2,3,4]).toInclude(4);
  expect([2,3,4]).toExclude(1);
});

it('should set firstName and lastName', () => {
  var user = {location: 'Philadelphia', age: 25};
  var res = utils.setName(user, 'Mark Williams');
});
