
import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/class/card';


@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

  @Input() card: Card;
  @Input() readonly = true
  
  constructor () { }

  ngOnInit() {}

}
