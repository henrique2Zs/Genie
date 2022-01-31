import { Injectable } from "@angular/core";
import { Card } from "./card";

@Injectable({
    providedIn: 'root'
})

export class User {    

    nickname: string;
    fullname: string;    
    infoHead: string = "";
    infoNeck: string = "";
    infoUpper: string= "";
    infoWaist: string= "";
    infoLower: string= "";
    infoFeet: string= "";
    infoAdditional: string= "";
    cardsWishes: number[] = new Array;
    cardsSent: number[] = new Array; 
    cardsSentAnswers = new Map<number, string>()// string= liked, unliked or ""  

    constructor(nickname: string,fullname: string) {
        this.nickname = nickname;
        this.fullname = fullname;
    }

    public sendCard(num: number)  {
        this.cardsSent.push(num);
    }
}


