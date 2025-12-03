import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProducts } from './detail-products';

describe('DetailProducts', () => {
  let component: DetailProducts;
  let fixture: ComponentFixture<DetailProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
