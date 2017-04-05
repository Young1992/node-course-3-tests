const expect = require('expect');
const rewire = require('rewire');

const app =rewire('./app');

describe('App', () => {
  let db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy('Y', 25);
    expect(spy).toHaveBeenCalledWith('Y', 25);
  });
  it('should call saveUser with user object', () => {
    let email = 'xuanyang333@gmail.com';
    let password = '123455';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith(email, password);
  });
});
