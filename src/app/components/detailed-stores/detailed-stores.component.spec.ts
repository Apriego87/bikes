import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedStoresComponent } from './detailed-stores.component';

describe('DetailedStoresComponent', () => {
  let component: DetailedStoresComponent;
  let fixture: ComponentFixture<DetailedStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailedStoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
