import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProjectPageComponent } from './info-project-page.component';

describe('InfoProjectPageComponent', () => {
  let component: InfoProjectPageComponent;
  let fixture: ComponentFixture<InfoProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoProjectPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
