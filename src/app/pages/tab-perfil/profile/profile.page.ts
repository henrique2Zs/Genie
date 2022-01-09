import { Component, OnInit } from '@angular/core';


 
@Component({
  selector: 'app-perfil',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: String = "{user}";

  constructor() { }

  ngOnInit() {
  }

}
