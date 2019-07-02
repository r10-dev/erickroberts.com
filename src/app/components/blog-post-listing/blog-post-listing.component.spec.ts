import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPostListingComponent } from './blog-post-listing.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('BlogPostListingComponent', () => {
  let component: BlogPostListingComponent;
  let fixture: ComponentFixture<BlogPostListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPostListingComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPostListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
