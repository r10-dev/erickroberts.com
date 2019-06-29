import { ContentTag} from './contenttag';

describe('ContentTag', () => {

  const _contenttag = new ContentTag({
    contenttagid: 1,
    contentid: 1,
    description: 'some description',
    url: 'some/url/to/linke/to',
    tags: 'great, tech, mom, life'
  });
  let contenttag = {
    contenttagid: 1,
    contentid: 1,
    description: 'some description',
    url: 'some/url/to/linke/to',
    tags: 'great, tech, mom, life'
  };

  it('should create an instance', () => {
    expect(new ContentTag(contenttag)).toBeTruthy();
  });
  it('should create an instance of contenttags from obj and be equal to the const', ()  => {
    expect(new ContentTag(contenttag)).toEqual(_contenttag);
  });
});
