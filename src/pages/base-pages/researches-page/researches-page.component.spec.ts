import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchesPageComponent } from './researches-page.component';

describe('ResearchesPageComponent', () => {
  let component: ResearchesPageComponent;
  let fixture: ComponentFixture<ResearchesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResearchesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
