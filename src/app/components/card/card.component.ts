
import { Component, Input, OnInit} from '@angular/core';
import { Card } from 'src/app/class/card';
import { CardsService } from 'src/app/services/cards.service';

import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})

export class CardComponent implements OnInit {

  @Input() card: Card;
  @Input() readonly = true
    
  constructor (
    private cardsServs: CardsService,
    private sanitizer: DomSanitizer) {}

  ngOnInit() {}
  

  async updateImg() {      
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos
    })
    this.card.src = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.webPath));
  }

  addInWishList() {    
    this.cardsServs.addInWishList(this.card.id)
  }

  quitInWishList() {    
    this.cardsServs.quitInWishList(this.card.id)    
  }

  addInLiked(){
    this.cardsServs.addInLiked(this.card.id)
  }

  quitInLiked() {
    this.cardsServs.quitInLiked(this.card.id)
  }

}
