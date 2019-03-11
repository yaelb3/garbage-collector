import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageContainerComponent } from './garbage-container.component';

describe('GarbageContainerComponent', () => {
  let component: GarbageContainerComponent;
  let fixture: ComponentFixture<GarbageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarbageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarbageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
