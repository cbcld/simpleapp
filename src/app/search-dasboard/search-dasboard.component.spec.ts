import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDasboardComponent } from './search-dasboard.component';

describe('SearchDasboardComponent', () => {
  let component: SearchDasboardComponent;
  let fixture: ComponentFixture<SearchDasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
