import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndUpdateProducts } from './add-and-update-products';

describe('AddAndUpdateProducts', () => {
  let component: AddAndUpdateProducts;
  let fixture: ComponentFixture<AddAndUpdateProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAndUpdateProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAndUpdateProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
