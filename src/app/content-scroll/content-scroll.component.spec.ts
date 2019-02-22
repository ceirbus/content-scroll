import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentScrollComponent } from './content-scroll.component';

describe('ContentScrollComponent', () => {
  let component: ContentScrollComponent;
  let fixture: ComponentFixture<ContentScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
