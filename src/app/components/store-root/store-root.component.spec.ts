import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreRootComponent } from './store-root.component';

describe('StoreRootComponent', () => {
  let component: StoreRootComponent;
  let fixture: ComponentFixture<StoreRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreRootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
