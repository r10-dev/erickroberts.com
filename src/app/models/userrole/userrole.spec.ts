import { UserRole } from './userrole';

describe('UserRole', () => {

  const USER_ROLE = new UserRole({
    userroleid: 1,
    userid: 1,
  });

  const userRole = {
    userroleid: 1,
    userid: 1,
  };

  it('should create an instance', () => {
    expect(new UserRole(userRole)).toBeTruthy();
  });
  it('should create a userRole from obj and be equal to _userRole constant', () => {
    expect(new UserRole(userRole)).toEqual(USER_ROLE);
  });
});
