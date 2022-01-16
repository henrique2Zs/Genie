import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';


 
@Component({
  selector: 'app-perfil',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User = new User("hzz","henrique");

  constructor() { }

  ngOnInit() {
  }

}
