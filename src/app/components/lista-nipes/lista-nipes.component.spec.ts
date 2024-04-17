import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNipesComponent } from './lista-nipes.component';

describe('ListaNipesComponent', () => {

  let component: ListaNipesComponent;
  let fixture: ComponentFixture<ListaNipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ListaNipesComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaNipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
