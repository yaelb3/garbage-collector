import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtleContainerComponent } from './buttle-container.component';

describe('ButtleContainerComponent', () => {
  let component: ButtleContainerComponent;
  let fixture: ComponentFixture<ButtleContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtleContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
