import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseInventoryComponent } from './release-inventory.component';

describe('ReleaseInventoryComponent', () => {
  let component: ReleaseInventoryComponent;
  let fixture: ComponentFixture<ReleaseInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleaseInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
