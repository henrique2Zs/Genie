
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
    cardsReceivedAnswers = new Map<number, string>()// card's number, string= liked or ""  

    constructor(nickname: string, fullname: string) {
        this.nickname = nickname;
        this.fullname = fullname;
    }

}


