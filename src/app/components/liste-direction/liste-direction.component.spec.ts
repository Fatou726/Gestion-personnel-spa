import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDirectionComponent } from './liste-direction.component';

describe('ListeDirectionComponent', () => {
  let component: ListeDirectionComponent;
  let fixture: ComponentFixture<ListeDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeDirectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
