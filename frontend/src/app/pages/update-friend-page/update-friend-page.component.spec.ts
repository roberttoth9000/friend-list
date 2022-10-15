import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFriendPageComponent } from './update-friend-page.component';

describe('UpdateFriendPageComponent', () => {
  let component: UpdateFriendPageComponent;
  let fixture: ComponentFixture<UpdateFriendPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFriendPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFriendPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
