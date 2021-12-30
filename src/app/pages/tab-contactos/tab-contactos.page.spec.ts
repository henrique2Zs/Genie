import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ContactsComponent } from 'src/app/components/list/contacts/contacts.component';

import { TabContactosPage } from './tab-contactos.page';

describe('TabContactosPage', () => {
  let component: TabContactosPage;
  let fixture: ComponentFixture<TabContactosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabContactosPage ],
      imports: [IonicModule.forRoot(), ContactsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TabContactosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
