import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBestSellerComponent } from './order-best-seller.component';

describe('OrderBestSellerComponent', () => {
  let component: OrderBestSellerComponent;
  let fixture: ComponentFixture<OrderBestSellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderBestSellerComponent]
    });
    fixture = TestBed.createComponent(OrderBestSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
