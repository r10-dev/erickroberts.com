import { Role } from './role';

describe('Role', () => {

  const _role = new Role({
    roleid: 1,
    title: 'admin',
    permissions: {'rd-wrt': true, 'edit-post': true},

  });

  let role = {
    roleid: 1,
    title: 'admin',
    permissions: {'rd-wrt': true, 'edit-post': true},

  };

  it('should create an instance', () => {
    expect(new Role(role)).toBeTruthy();
  });
  it('should create Role from obj and be equal to the const role', () => { 
    expect(new Role(role)).toEqual(_role);
  });
});
