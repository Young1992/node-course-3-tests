const expect = require('expect');

const utils = require('./utils.js');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      let res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
    });
  });


  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    let res = utils.square(2);
    expect(res).toBe(4).toBeA('number');
  });

  it('should async square a number', (done) => {
    utils.asyncSquare(2, (res) => {
      expect(res).toBe(4).toBeA('number');
      done();
    });
  });
});

it('should verify first and last names are set', () => {
  let user = {location: 'Dublin', age: 25};
  let res = utils.setName(user, 'Xuan Yang');
  expect(res).toInclude({
    firstName: 'Xuan',
    lastName: 'Yang'
  });
});

// it('should expect some values', () => {
//   //expect(12).toNotBe(11);
//   //expect({name: 'young'}).toNotEqual({name: 'Young'});
//   //expect([2, 3, 4]).toInclude(2);
//   expect({
//     name: 'Young',
//     age: 25,
//     location: 'Dublin'
//   }).toInclude({
//     age: 25
//   })
// });
