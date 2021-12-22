import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactsComponent } from 'src/app/list/contacts/contacts.component';
import { IonList} from '@ionic/angular';

@Component({
  selector: 'app-tab-contactos',
  templateUrl: './tab-contactos.page.html',
  styleUrls: ['./tab-contactos.page.scss'],
})
export class TabContactosPage implements OnInit {
  //schedule.ts
  @ViewChild('scheduleList', { static: true }) scheduleList: IonList;

  constructor() { }

  ngOnInit() { }

}
