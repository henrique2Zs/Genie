import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Card {
    id: number = 0;
    link?: string = ""; 
    src?: string = "";
    title: string = "";
    description?: string = "";
    authorId: number = 0;
    lang: string = "";
   
    constructor(id?, link?,src?, title?,description?,authorId?,lang?) {
        this.id = id;
        this.link = link;
        this.src = src;
        this.title = title;
        this.description = description;
        this.authorId = authorId;        
        this.lang = lang;
    }
}
