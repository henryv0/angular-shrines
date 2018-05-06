import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrinesComponent } from './shrines.component';

describe('ShrinesComponent', () => {
  let component: ShrinesComponent;
  let fixture: ComponentFixture<ShrinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShrinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShrinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
