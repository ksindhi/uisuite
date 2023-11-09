import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UisuiteComponent } from './uisuite.component';

describe('UisuiteComponent', () => {
  let component: UisuiteComponent;
  let fixture: ComponentFixture<UisuiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UisuiteComponent]
    });
    fixture = TestBed.createComponent(UisuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
