import { Comment } from './comment';

describe('Comment', () => {

  const _comment = new Comment({
    commentid: 1,
    userid: 1,
    contentid: 1,
    shorttext: 'Really great comment about the content',
    body: 'Really long body of comment'
  });
  let comment;
  beforeEach(() => {
    comment = {
      commentid: 1,
      userid: 1,
      contentid: 1,
      shorttext: 'Really great comment about the content',
      body: 'Really long body of comment'
    };
  });
  it('should create an instance', () => {
    expect(new Comment(comment)).toBeTruthy();
  });
  it('should create an instance that matches the constant', () => {
    expect(new Comment(comment)).toEqual(_comment);
  });
});
