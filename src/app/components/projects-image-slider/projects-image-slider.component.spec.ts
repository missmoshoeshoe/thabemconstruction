import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsImageSliderComponent } from './projects-image-slider.component';

describe('ProjectsImageSliderComponent', () => {
  let component: ProjectsImageSliderComponent;
  let fixture: ComponentFixture<ProjectsImageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsImageSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
