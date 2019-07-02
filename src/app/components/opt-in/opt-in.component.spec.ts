import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptInComponent } from './opt-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OptInComponent', () => {
  let component: OptInComponent;
  let fixture: ComponentFixture<OptInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptInComponent],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
