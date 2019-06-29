import { UserViewModel } from './user-view-model';

describe('UserViewModel', () => {

  const uvm = new UserViewModel({
    username: 'erick roberts',
    isauthor: true,
    roleselected: 'Super User',
    password: 'super secrets',
    email: 'erick@erick.com',
  });

  const obj = {
    username: 'erick roberts',
    isauthor: true,
    roleselected: 'Super User',
    password: 'super secrets',
    email: 'erick@erick.com',
  };

  it('should create an instance', () => {
    expect(new UserViewModel(obj)).toBeTruthy();
  });

  it('should create and instance of UserViewModel from obj and be equal to the constant', () => {
    expect(new UserViewModel(obj)).toEqual(uvm);
  });
});
