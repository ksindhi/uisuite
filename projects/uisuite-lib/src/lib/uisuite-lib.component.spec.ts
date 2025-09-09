import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UisuiteLibComponent } from './uisuite-lib.component';

describe('UisuiteLibComponent', () => {
  let component: UisuiteLibComponent;
  let fixture: ComponentFixture<UisuiteLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UisuiteLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UisuiteLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
