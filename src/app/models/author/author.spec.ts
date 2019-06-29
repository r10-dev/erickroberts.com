import { Author } from './author';
describe('Author', () => {

  let author;

  const _author = new Author({authorid: 1,
    authorname: 'erick roberts',
    authorimage: 'some path to amazing picture of me',
    userid: 2});

  beforeEach(() => {
    author = {
      authorid: 1,
      authorname: 'erick roberts',
      authorimage: 'some path to amazing picture of me',
      userid: 2
       };
  });
  it('should create an instance equal to the constant', () => {
    expect(new Author(author)).toEqual(_author);
  });
});

