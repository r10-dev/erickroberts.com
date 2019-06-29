import { User } from './user';

describe('User', () => {
  const _user = new User({
    userid: 1,
    username: 'erick roberts',
  });

  let user = {
    userid: 1,
    username: 'erick roberts',
  };

  it('should create an instance', () => {
    expect(new User(user)).toBeTruthy();
  });
  it('it should create an User from obj and be equal to the constant', () => {
    expect(new User(user)).toEqual(_user);
  });
});
