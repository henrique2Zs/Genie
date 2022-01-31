import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contactsMap: Map<string, User> = new Map<string, User>();
  contactSelected: User;
  contactsArray: User[] = new Array;
  
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
  Incluye contact in a map para el orden alfabético y búsqueda
  y lo referencia en un Array utilizado en algunas clases
  */ 
  setContact(nickname: string): void {
    this.contactsMap.set(nickname, new User("nickname",""))
    this.contactsArray.push(this.contactsMap.get(nickname));
  }
   
  getContact(): User{
    return this.contactSelected;
  }

  getContactsMap(): Map<string,User> {
    return this.contactsMap;
  }
  
  getContactsArray(): User[] {
    return this.contactsArray;
  }
}
