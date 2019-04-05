import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDhis2MapComponent } from './ngx-dhis2-map.component';

describe('NgxDhis2MapComponent', () => {
  let component: NgxDhis2MapComponent;
  let fixture: ComponentFixture<NgxDhis2MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDhis2MapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDhis2MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
