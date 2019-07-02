import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostDetailsComponent } from './blog-post-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


// Stub out butter service
// mock and stub active route with params

describe('BlogPostDetailsComponent', () => {
  let mockButterService;
  let component: BlogPostDetailsComponent;
  let fixture: ComponentFixture<BlogPostDetailsComponent>;

  const butterData = {
    meta: {
     count: 1,
     next_page: null,
     previous_page: null
   },
   data: [
     {
       url: 'http://www.example.com/blog/this-is-a-blog-post',
       created: '2015-06-12T13:59:32.441289Z',
       published: '2015-06-12T00:00:00Z',
       author: {
         first_name: 'API',
         last_name: 'Test',
         email: 'apitest@buttercms.com',
         slug: 'api-test',
         bio: 'This is my bio.',
         title: 'API',
         linkedin_url: 'https://www.linkedin.com/in/API',
         facebook_url: 'https://www.facebook.com/API',
         pinterest_url: 'https://www.pinterest.com/API',
         instagram_url: 'https://www.instagram.com/API',
         twitter_handle: 'buttercmsapi',
         profile_image: 'https://buttercms.com/api.png'
       },
       categories: [
         {
           name: 'test category',
           slug: 'test-category'
         }
       ],
       tags: [
         {
           name: 'test tag',
           slug: 'test-tag'
         }
       ],
       featured_image: 'https://buttercms.com/api.png',
       slug: 'this-is-a-blog-post',
       title: 'This is a blog post',
       body: '<p class="">This is a blog post to test the API.</p>',
       summary: 'This is a blog post to test the API.',
       seo_title: 'This is a blog post',
       meta_description: 'This is a blog post to test the API.',
       status: 'published'
     }
   ]
 };

  beforeEach(async(() => {
     mockButterService = jasmine.createSpyObj('ButterService', ['post_retrieve']);

     TestBed.configureTestingModule({
      declarations: [BlogPostDetailsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();

     fixture = TestBed.createComponent(BlogPostDetailsComponent);
     component = fixture.componentInstance;

  }));
  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call getSlug when initialized', () => {
    spyOn(component, 'getSlug');
    fixture.detectChanges();
    expect(component.getSlug).toHaveBeenCalled();
  });

  it('should call processSlug when initialized', () => {
    spyOn(component, 'processSlug');
    fixture.detectChanges();
    expect(component.processSlug).toHaveBeenCalled();
  });
  it('it should generate a blog title', () => {
    component.post = butterData;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    console.log(compiled);
    expect(compiled.querySelector('h1.post-body').textContent).toEqual(butterData.data[0].title);
  });
});
///will have to change the butterservice to be injectable
//the way it is doesn't lend the component to be tested