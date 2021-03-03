import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherDetComponent } from './other-det.component';

describe('OtherDetComponent', () => {
  let component: OtherDetComponent;
  let fixture: ComponentFixture<OtherDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
