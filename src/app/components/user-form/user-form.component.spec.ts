import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { UserFormComponent } from './user-form.component';
import {FormsModule} from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let mockUsers = [];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormComponent ],
      imports: [
        FormsModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inject(
      [HttpTestingController],
      (httpmock: HttpTestingController) => {
        mockUsers = [{
          username: 'Erick',
          roleselected: 'Reader',
          isauthor: false,
          password: 'rooster1',
          email: 'erick@erickroberts.com',
        }];
      }
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
