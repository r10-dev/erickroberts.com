import { UserLogin } from './user-login';

describe('UserLogin', () => {

  const login = new UserLogin({
    username: 'Erick Roberts',
    password: 'Rooster1!',
  });

  const log = {
    username: 'Erick Roberts',
    password: 'Rooster1!',
  };

  it('should create an instance', () => {
    expect(new UserLogin(log)).toBeTruthy();
  });

  it('should create a login from an object and be equal to the constant', () => {
    expect(new UserLogin(log)).toEqual(login);
  });
});
