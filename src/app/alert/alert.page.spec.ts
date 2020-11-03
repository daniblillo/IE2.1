import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AlertPage } from './alert.page';

describe('AlertPage', () => {
  let component: AlertPage;
  let fixture: ComponentFixture<AlertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
