import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { UserLoginComponent } from './user-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;
  let mockLogin = [];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoginComponent ],
      imports: [
        FormsModule,
        HttpClientTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inject(
      [HttpTestingController],
      (httpmock: HttpTestingController) => {
        mockLogin = [{
          username: 'Erick',
          password: 'rooster1',
        }];
      }
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
