import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOpsComponent } from './content-ops.component';

describe('ContentOpsComponent', () => {
  let component: ContentOpsComponent;
  let fixture: ComponentFixture<ContentOpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentOpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentOpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
