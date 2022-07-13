import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarhommeComponent } from './navbarhomme.component';

describe('NavbarhommeComponent', () => {
  let component: NavbarhommeComponent;
  let fixture: ComponentFixture<NavbarhommeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarhommeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarhommeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
