import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchResaultComponent } from './product-search-resault.component';

describe('ProductSearchResaultComponent', () => {
  let component: ProductSearchResaultComponent;
  let fixture: ComponentFixture<ProductSearchResaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchResaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductSearchResaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
