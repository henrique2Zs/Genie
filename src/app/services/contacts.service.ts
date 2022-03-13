import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contactSelected: User;

  contactsMap: Map<string, User> = new Map<string, User>();  
  contactsArray: User[] = new Array;

  includedByThis: Map<string, User> = new Map<string, User>(); 
  includedByThisArray: User[] = new Array

  includedInAnother: Map<string, string> = new Map<string, string>(); 
  includedInAnotherArray: User[] = new Array
  
  constructor() {
    //Pueba: Lista de contactos de un usuario
    let user1 = new User("aa", "alex a");
    let user2 = new User("bb", "bola b");
    this.contactsMap.set("aa", user1);
    this.contactsMap.set("bb", user2);
    /*
    user1.sendCard(1); 
    user1.cardsSentAnswers.set(1, "liked")
    user2.sendCard(2);
    user2.cardsSentAnswers.set(2, "unliked")
    */
    this.contactsArray.push(this.contactsMap.get("aa"));
    this.contactsArray.push(this.contactsMap.get("bb"));
   }

  searchContactIntoDB(nickname: string){
    //TODO
  }
  /*
  Incluye contact in a map para mantener en el orden alfabético
  */ 
  setContact(nickname: string): void {
    this.includedByThis.set(nickname, new User (nickname, nickname))
    this.includedByThisArray = new Array
    for (let user of this.includedByThis) {
      this.includedByThisArray.push(user[1])
    }    
  }

  removeContact(nickname: string) {
    this.contactsMap.delete(nickname)
  }

  getContact(nickname: string): User {
    return this.contactsMap.get(nickname)
  }
   
  getContactSelected(): User{
    return this.contactSelected;
  }

  getContactsMap(): Map<string,User> {
    return this.contactsMap;
  }
  
  getContactsArray(): User[] {
    return this.contactsArray;
  }

  getIncludedByThisArray(): User[] {
    return this.includedByThisArray
  }

  getIncludedInAnotherArray(): User[] {
    return this.includedInAnotherArray
  }
}
