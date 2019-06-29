import { Content } from './content';
import { toDate } from '@angular/common/src/i18n/format_date';

describe('Content', () => {
  const _content = new Content({
    contentid: 1,
    authorid: 1,
    views: 3.5,
    stars: 4.0,
    published: true,
    staged: true,
    draft: true,
    slug: 'url-short-name',
    title: 'url-long-name',
    headerimage: 'image to an amzing article',
    tabimage: 'smaller image to amazing article',
    body: 'an amazing body for an amazing article',
    created_on: new Date(1559818832),
    published_on: new Date(1559818832),
  });
  let content;

  beforeEach(() => {
    
    content = {
      contentid: 1,
      authorid: 1,
      views: 3.5,
      stars: 4.0,
      published: true,
      staged: true,
      draft: true,
      slug: 'url-short-name',
      title: 'url-long-name',
      headerimage: 'image to an amzing article',
      tabimage: 'smaller image to amazing article',
      body: 'an amazing body for an amazing article',
      created_on: new Date(1559818832),
      published_on: new Date(1559818832),
    };

  });



  it('should create an instance', () => {
    expect(new Content(content)).toBeTruthy();
  });
  it('should create and instance from obj that is equal to the const', () => {
    expect(new Content(content)).toEqual(_content);
  });
});
