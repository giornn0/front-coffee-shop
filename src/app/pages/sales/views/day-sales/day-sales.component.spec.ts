import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySalesComponent } from './day-sales.component';

describe('DaySalesComponent', () => {
  let component: DaySalesComponent;
  let fixture: ComponentFixture<DaySalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaySalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaySalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
