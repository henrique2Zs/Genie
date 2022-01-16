import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';

@Component({
  selector: 'info-perfil',
  templateUrl: './info-perfil.component.html',
  styleUrls: ['./info-perfil.component.scss'],
})
export class InfoPerfilComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {}

}
