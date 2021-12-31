import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ContactsComponent } from 'src/app/components/list/contacts/contacts.component';

import { ContactsPage } from './contacts-page.page';

describe('ContactsPage', () => {
  let component: ContactsPage;
  let fixture: ComponentFixture<ContactsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsPage ],
      imports: [IonicModule.forRoot(), ContactsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
